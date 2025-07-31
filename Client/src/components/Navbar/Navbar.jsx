import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-blue-900 px-5 h-15 flex justify-between items-center transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <a href="#hero" className="text-gray-300 font-medium text-lg">
          <span className="text-yellow-400">Bishal's </span> Portfolio
        </a>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="px-5 text-gray-300 font-semibold hover:text-yellow-400"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MdMenu size={30} className="text-gray-300" />
          </SheetTrigger>
          <SheetContent className="bg-blue-900 p-6">
            <SheetHeader />
            <div className="flex flex-col items-center gap-4 mt-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 font-semibold hover:text-yellow-400 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
