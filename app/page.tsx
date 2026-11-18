import Link from "next/link";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work";
import Contact from "./components/contact";
export default function Hero() {
  return (
    <main className="w-full min-h-screen bg-[#F4F6FA] text-[#1A1A1A]">
      <section className="relative w-full overflow-hidden bg-linear-to-b from-[#E8EEF9] via-[#F4F6FA] to-[#F4F6FA] border-b border-[#1C3F8C]/15">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-24 md:py-28 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#1C3F8C]/15 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#1C3F8C] shadow-2xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1C3F8C] animate-pulse" />
            Mercy Brenda Muti
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1C3F8C] uppercase leading-[1.05]">
            GRAPHIC DESIGNER
          </h1>
          <p className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[0.18em] text-[#1C3F8C]/85 uppercase mt-2 sm:mt-3">
            PORTFOLIO
          </p>

          <p className="mt-5 max-w-xl text-xs sm:text-sm md:text-base text-[#333333] leading-relaxed">
            Crafting memorable brand identities, visual storytelling, posters,
            and social media graphics that communicate clearly and inspire
            audiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <Link
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1C3F8C] text-white text-xs sm:text-sm font-semibold shadow-sm hover:bg-[#15306B] transition-all"
            >
              <span>Explore My Work</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-[#1C3F8C]/25 bg-white text-[#1C3F8C] text-xs sm:text-sm font-semibold hover:bg-[#E8EEF9]/60 transition-all"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}
