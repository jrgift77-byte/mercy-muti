"use client";

import { useState } from "react";
import Image from "next/image";

const visualIdentities = [
  {
    brand: "ZESTUP JUICE",
    tagline: "Fresh • Energetic • Modern",
    logo: "/zest logo.jpeg",
    colors: [
      { name: "Leaf Green", hex: "#2D8A3E" },
      { name: "Citrus Orange", hex: "#F59E0B" },
      { name: "Sunny Yellow", hex: "#FACC15" },
      { name: "Pure White", hex: "#FFFFFF", border: true },
    ],
    mockups: [
      {
        title: "Cup Packaging",
        image: "/Free_Craft_Cup_Mockup.png",
        alt: "ZestUp Juice Takeaway Cup Mockup",
      },
      {
        title: "Social Media Poster",
        image: "/zest juice.jpeg",
        alt: "ZestUp Juice Promotional Poster",
      },
      {
        title: "Business Cards",
        image: "/zestcard.jpeg",
        alt: "ZestUp Juice Brand Stationery & Cards",
      },
      {
        title: "Product Packaging",
        image: "/zest logo.jpeg",
        alt: "ZestUp Juice Retail Box Design",
      },
    ],
  },
  {
    brand: "ZEN LEAF TEA",
    tagline: "Natural • Calm • Refreshing",
    logo: "/zenleaftea.jpeg",
    colors: [
      { name: "Forest Tea", hex: "#1E6B34" },
      { name: "Matcha Leaf", hex: "#7CB342" },
      { name: "Warm Cream", hex: "#F5F2EB", border: true },
      { name: "Herbal Sand", hex: "#D6B88D" },
    ],
    mockups: [
      {
        title: "Business Cards",
        image: "/zenb.jpeg",
        alt: "Zen Leaf Tea Business Card Mockup",
      },
      {
        title: "Chai Box Packaging",
        image: "/chai.jpeg",
        alt: "Zen Leaf Chai Tea Box Mockup",
      },
      {
        title: "Brand Poster",
        image: "/zenleaftea.jpeg",
        alt: "Zen Leaf Green Tea Promotional Poster",
      },
    ],
  },
];

export default function Work() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <section id="work" className="w-full bg-[#F4F6FA] py-12 sm:py-16">
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 space-y-14">
        {visualIdentities.map((identity) => (
          <article key={identity.brand}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1C3F8C]/10">
              <div>
                <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-[#1C3F8C]">
                  {identity.brand}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#444444] mt-0.5">
                  {identity.tagline}
                </p>
              </div>
              <span className="self-start sm:self-auto text-[11px] font-bold uppercase tracking-widest text-[#1C3F8C] bg-[#E8EEF9] px-3.5 py-1.5 rounded-full">
                Brand Guidelines &amp; Mockups
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
              {/* Primary Brand Logo */}
              <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F4F6FA]/70 border border-[#1C3F8C]/10 p-6 min-h-52.5">
                <div className="relative w-full h-28">
                  
                </div>
                <span className="mt-4 text-[11px] font-bold uppercase tracking-wider text-[#1C3F8C]/70">
                  Primary Brand Logo
                </span>
              </div>

              {/* Colour Palette */}
              <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F4F6FA]/70 border border-[#1C3F8C]/10 p-6 min-h-52.5">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  {identity.colors.map((swatch) => (
                    <button
                      key={swatch.hex}
                      type="button"
                      onClick={() => handleCopyColor(swatch.hex)}
                      title={`Copy ${swatch.name} (${swatch.hex})`}
                      className="group flex flex-col items-center gap-2 cursor-pointer"
                    >
                      <span
                        style={{ backgroundColor: swatch.hex }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-xs transition-transform group-hover:scale-110 ${
                          swatch.border
                            ? "border border-[#1A1A1A]/25"
                            : "border border-black/10"
                        }`}
                      />
                      <span className="text-[10px] font-mono font-semibold text-[#333333]">
                        {copiedHex === swatch.hex ? "Copied!" : swatch.hex}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1A1A1A]">
                  COLOUR PALETTE
                </p>
              </div>

              {/* Mockups */}
              {identity.mockups.map((mockup) => (
                <div
                  key={mockup.title}
                  className="group relative rounded-2xl bg-[#F4F6FA]/70 border border-[#1C3F8C]/10 overflow-hidden min-h-52.5 flex flex-col justify-between p-4"
                >
                  <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden bg-white">
                    <Image
                      src={mockup.image}
                      alt={mockup.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-center text-[11px] font-bold uppercase tracking-wider text-[#1C3F8C]/80">
                    {mockup.title}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
