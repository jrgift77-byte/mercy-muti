import Image from "next/image";

const highlights = [
  { label: "Brand Identity", detail: "Logos, Color Systems & Typography" },
  { label: "Digital & Print", detail: "Social Media Graphics & Posters" },
  { label: "Visual Strategy", detail: "Audience-Focused Design Concepts" },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#F4F6FA] border-b border-[#1C3F8C]/15 py-14 sm:py-20"
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
        <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#1C3F8C] bg-[#E8EEF9] px-3 py-1 rounded-full mb-2">
              Introduction
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C3F8C] tracking-tight">
              About Me
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-[#222222]">
            <p>
              Hi, I&apos;m{" "}
              <span className="font-bold text-[#1C3F8C]">
                Mercy Brenda Ndlovu
              </span>
              , a creative and motivated Graphic Designer passionate about
              creating visually appealing designs that communicate ideas clearly
              and connect with audiences.
            </p>
            <p>
              I enjoy creating brand identities, posters, social media designs
              and exploring different design styles to bring creative ideas to
              life.
            </p>
            <p>
              I am always willing to learn new design skills, improve my
              creativity and develop my knowledge in the graphic design
              industry.
            </p>
          </div>

          <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-2xl bg-white border border-[#1C3F8C]/12 shadow-2xs"
              >
                <p className="text-xs sm:text-sm font-bold text-[#1C3F8C]">
                  {item.label}
                </p>
                <p className="text-[11px] sm:text-xs text-[#444444] mt-1 leading-snug">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-64 h-80 sm:w-76 sm:h-96 md:w-80 md:h-105 rounded-2xl bg-[#1C3F8C] p-2.5 shadow-lg">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#1C3F8C]">
              <Image
                src="/mercy.jpeg"
                alt="Mercy Brenda Ndlovu - Graphic Designer"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
