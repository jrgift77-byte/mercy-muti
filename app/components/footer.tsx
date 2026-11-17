export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1C3F8C] text-white">
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-10 sm:py-12">
        {/* Top Row: Brand, Navigation & Contact */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/15">
          {/* Brand Info */}
          <div>
            <a
              href="#"
              className="text-lg sm:text-xl font-black tracking-tight text-white hover:text-[#93C5FD] transition-colors"
            >
              Mercy Brenda Muti
            </a>
            <p className="text-xs sm:text-sm text-white/75 mt-1">
              Graphic Designer • Brand Identity &amp; UI/UX
            </p>
          </div>

          {/* Quick Section Links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-white/85"
          >
            <a href="#work" className="hover:text-[#93C5FD] transition-colors">
              Work
            </a>
            <a
              href="#skills"
              className="hover:text-[#93C5FD] transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-[#93C5FD] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Direct Contact Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-white/90">
            <a
              href="tel:+263784779134"
              className="inline-flex items-center gap-2 hover:text-[#93C5FD] transition-colors"
            >
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#93C5FD] shrink-0"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span>+263 78 477 9134</span>
            </a>

            <a
              href="mailto:mutimercy680@gmail.com"
              className="inline-flex items-center gap-2 hover:text-[#93C5FD] transition-colors"
            >
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#93C5FD] shrink-0"
                aria-hidden="true"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span>mutimercy680@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>&copy; {currentYear} Mercy Brenda Muti. All rights reserved.</p>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 font-semibold text-white/85 hover:text-[#93C5FD] transition-colors"
          >
            <span>Back to top</span>
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
