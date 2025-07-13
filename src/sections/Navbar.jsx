import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
      <li className="nav-li">
        <a className="nav-link text-lg sm:text-xl" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-lg sm:text-xl" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-lg sm:text-xl" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-lg sm:text-xl" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4 sm:py-6">
          <a
            href="/"
            className="text-2xl sm:text-3xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Gen AI
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-8 h-8"
              alt="toggle"
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
