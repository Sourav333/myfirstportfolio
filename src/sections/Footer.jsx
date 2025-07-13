import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="c-space pb-6 pt-6 text-base sm:text-lg text-neutral-400">
      <div className="mb-6 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-y-6 text-center sm:text-left">
        {/* Policy links */}
        <div className="flex gap-4 sm:gap-6">
          <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
          <span>|</span>
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
        </div>

        {/* Social icons */}
        <div className="flex gap-4">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={social.icon} className="w-6 h-6" alt={social.name} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center sm:text-right">
          © 2025 Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
