import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function HeroSection() {
  const [animate, setAnimate] = useState(false); // ✅ Correct

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // ✅ Starts animation after load
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="bg-blue-950 w-full h-screen">
      <div className="flex flex-col items-center justify-center text-center h-full p-4">
        {/* 🔁 Fixed invalid duration (800 → 700) */}
        <h2
          className={`text-gray-300 text-4xl md:text-5xl font-bold p-4 mb-5 tracking-tight
          transform transition-all duration-700 ease-out
          ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Hii, I'm <span className="text-yellow-600">Bishal </span>Chakraborty
        </h2>

        {/* ✅ Paragraph animation is clean */}
        <p
          className={`text-lg md:text-xl text-gray-300 mx-auto md:px-20 lg:px-80 
          transition-opacity duration-1000 delay-300
          ${animate ? "opacity-100" : "opacity-0"}`}
        >
          MERN Stack Developer passionate about building full-stack web
          applications with clean, scalable code. Enthusiast in Data Structures
          & Algorithms, solving problems daily to sharpen core logic skills.
        </p>

        {/* 🔁 duration-1200 → valid Tailwind duration: 1000 */}
        <div
          className={`my-10 transition-opacity duration-1000 delay-500
          ${animate ? "opacity-100" : "opacity-0"}`}
        >
          <a
            href="#"
            className="inline-block px-6 py-2 text-yellow-500 rounded-2xl hover:text-yellow-300 
            hover:font-bold font-semibold transition duration-300"
          >
            View CV
          </a>
        </div>

        {/* 🔁 duration-1500 → valid: use duration-1000 or custom config */}
        <a
          href="#skills"
          className={`transition-opacity duration-1000 delay-700
          ${animate ? "opacity-100" : "opacity-0"}`}
        >
          <MdKeyboardDoubleArrowDown className="pt-0 text-gray-300 text-4xl animate-bounce hover:scale-110" />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
