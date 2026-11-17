const tools = [
  {
    name: "Canva",
    role: "Social Media & Brand Templates",
    badgeText: "Canva",
    badgeStyle:
      "bg-gradient-to-br from-[#00C4CC] via-[#3B82F6] to-[#7C3AED] text-white text-xs font-bold italic",
  },
  {
    name: "Adobe Illustrator",
    role: "Vector Logos & Brand Identity",
    badgeText: "Ai",
    badgeStyle:
      "bg-[#330000] text-[#FF9A00] border-2 border-[#FF9A00] text-lg font-extrabold",
  },
  {
    name: "Figma",
    role: "UI/UX Layouts & Digital Assets",
    badgeText: "F",
    badgeStyle: "bg-[#1E1E1E] text-[#F24E1E] text-lg font-extrabold",
  },
  {
    name: "Photoshop",
    role: "Photo Retouching & Poster Compositing",
    badgeText: "Ps",
    badgeStyle:
      "bg-[#001E36] text-[#31A8FF] border-2 border-[#31A8FF] text-lg font-extrabold",
  },
];

const graphicDesignSkills = [
  "Graphic Design",
  "Branding",
  "UI/UX Design",
  "Social Media Design",
  "Typography",
  "Prototyping",
  "Visual Design",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-[#F4F6FA] border-b border-[#1C3F8C]/15 py-14 sm:py-20"
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#1C3F8C] bg-[#E8EEF9] px-3 py-1 rounded-full mb-2">
            Design Toolkit
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C3F8C]">
            My Skills
          </h2>
        </div>

        {/* Main Grid: Brand Banner + Software Tools */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
          <div className="lg:col-span-4 flex flex-row lg:flex-col justify-center lg:justify-start items-center lg:items-start gap-4 sm:gap-6 lg:gap-3 p-6 sm:p-8 rounded-2xl bg-[#1C3F8C] text-white shadow-md">
            <p className="text-xl sm:text-3xl md:text-4xl font-light tracking-wide">
              design
            </p>
            <span className="lg:hidden text-white/40">•</span>
            <p className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
              create
            </p>
            <span className="lg:hidden text-white/40">•</span>
            <p className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-[#93C5FD]">
              inspire
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#1C3F8C]/12 shadow-2xs hover:border-[#1C3F8C] hover:shadow-md transition-all"
              >
                <span
                  className={`w-13 h-13 rounded-xl flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-105 ${tool.badgeStyle}`}
                >
                  {tool.badgeText}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A] group-hover:text-[#1C3F8C] transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-[#555555] mt-0.5">{tool.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Graphic Design Skills Bar */}
        <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-[#1C3F8C]/12 shadow-2xs">
          <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#1C3F8C] mb-4">
            Graphic Design Skills
          </h3>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {graphicDesignSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#1C3F8C] bg-[#E8EEF9]/70 border border-[#1C3F8C]/15 hover:bg-[#1C3F8C] hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
