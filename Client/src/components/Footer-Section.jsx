import { useEffect } from "react";
import { FiArrowUpCircle } from "react-icons/fi";

function Footer() {
  useEffect(() => {
    const getBattery = async () => {
      try {
        const battery = await navigator.getBattery();

        return {
          level: battery.level,
          charging: battery.charging,
        };
      } catch {
        return null;
      }
    };

    const getDeviceInfo = () => {
      const ua = navigator.userAgent;

      return {
        isMobile: /Mobi|Android/i.test(ua),
        isTablet: /Tablet|iPad/i.test(ua),
        isDesktop: !/Mobi|Android|Tablet|iPad/i.test(ua),
        ram: navigator.deviceMemory || null,
        cpuCores: navigator.hardwareConcurrency || null,
        touch: "ontouchstart" in window || navigator.maxTouchPoints > 0,
        orientation: screen.orientation?.type || "unknown",
      };
    };

    const getNetworkInfo = () => {
      const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;

      return connection
        ? {
            type: connection.effectiveType,
            rtt: connection.rtt,
            downlink: connection.downlink,
          }
        : null;
    };

    const fetchVisitorData = async () => {
      try {
        const ipRes = await fetch("https://ipapi.co/json/");
        const ipData = await ipRes.json();

        const battery = await getBattery();
        const device = getDeviceInfo();
        const network = getNetworkInfo();

        const readableTimestamp = new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        const res = await fetch("http://localhost:5000/visitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ip: ipData.ip,
            city: ipData.city,
            isp: ipData.org,
            timestamp: readableTimestamp,
            battery,
            device,
            network,
          }),
        });

        const result = await res.json();
        console.log("Visit count:", result.visits);
      } catch (err) {
        console.error("Error sending visitor info:", err);
      }
    };

    fetchVisitorData();
  }, []);

  return (
    <footer className="text-center text-sm text-gray-300 bg-blue-900 py-6">
      <div className="flex justify-between items-center px-5 text-md">
        <p>
          &copy; {new Date().getFullYear()} Bishal Chakraborty. All rights
          reserved.
        </p>
        <a
          href="#hero"
          className="hover:text-white transition-transform duration-200 hover:scale-110"
        >
          <FiArrowUpCircle size={36} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
