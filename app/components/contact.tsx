export default function ThankYou() {
  return (
    <section
      id="contact"
      className="w-full bg-[#F4F6FA] border-t border-[#1C3F8C]/15 py-14 sm:py-20"
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col justify-between min-h-80 sm:min-h-95">
        {/* Top Name Label */}
        <div>
          <p className="text-sm sm:text-base font-bold text-[#1C3F8C]">
            Mercy Brenda Muti
          </p>
        </div>

        {/* Center Hero Message */}
        <div className="my-10 sm:my-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#1C3F8C]">
            THANK YOU
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-xl md:text-2xl font-normal text-[#1A1A1A]">
            Thank you for taking the time to view my portfolio.
          </p>
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl font-extrabold text-[#1C3F8C]">
            Mercy Brenda Muti
          </p>
        </div>

        {/* Bottom Contact Row */}
        <div className="pt-6 border-t border-[#1C3F8C]/10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 text-xs sm:text-sm font-medium text-[#1A1A1A]">
          {/* Phone Link */}
          <a
            href="tel:+263784779134"
            className="inline-flex items-center gap-2.5 hover:text-[#1C3F8C] transition-colors group"
          >
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-[#1C3F8C] shrink-0 group-hover:scale-110 transition-transform"
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

          {/* Email Link */}
          <a
            href="mailto:mutimercy680@gmail.com"
            className="inline-flex items-center gap-2.5 hover:text-[#1C3F8C] transition-colors group"
          >
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-[#1C3F8C] shrink-0 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <span>mutimercy680@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
