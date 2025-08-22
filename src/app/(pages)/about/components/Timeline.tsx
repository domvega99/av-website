"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
  {
    year: 1981,
    title: "A Man with a Vision",
    description:
      "The beginning of an extraordinary journey. A visionary leader emerges with bold ideas that would reshape the future, setting the foundation for decades of innovation and growth.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
    position: "top",
  },
  {
    year: 1982,
    title: "A Father’s Vision, A Family’s Mission",
    description:
      "Taking the first brave steps into uncharted territory. With courage and determination, new paths are forged through uncertainty, laying the groundwork for future breakthroughs.",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=250&fit=crop",
    position: "bottom",
  },
  {
    year: 1983,
    title: "Stepping Into the Unknown",
    description:
      "Strategic alliances form the backbone of success. Strong partnerships are established, creating a network of trust and collaboration that would prove invaluable in the years to come.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop",
    position: "top",
  },
  {
    year: 1985,
    title: "Loss Beneath the Waves",
    description:
      "Legacy takes shape as vision becomes mission. A father's dreams transform into a family's shared purpose, ensuring continuity and dedication across generations.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    position: "bottom",
  },
  {
    year: 1986,
    title: "Anchored in Partnership",
    description:
      "Through adversity comes strength. Facing unexpected challenges and losses, resilience is tested and character is forged, ultimately leading to deeper wisdom and renewed purpose.",
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=250&fit=crop",
    position: "top",
  },
  {
    year: 1995,
    title: "Passing the Wheel",
    description:
      "Through adversity comes strength. Facing unexpected challenges and losses, resilience is tested and character is forged, ultimately leading to deeper wisdom and renewed purpose.",
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=250&fit=crop",
    position: "top",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const yearsRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const topYears = [1981, 1983, 1985, 1987, 1995, 1997, 2000];

  const calculateCardPosition = (cardYear: number) => {
    const yearSpacing = 400;
    const baseOffset = 40;

    switch (cardYear) {
      case 1981:
        return baseOffset;
      case 1982:
        return baseOffset + 0 * yearSpacing + yearSpacing / 2;
      case 1983:
        return baseOffset + 1 * yearSpacing;
      case 1985:
        return baseOffset + 2 * yearSpacing;
      case 1986:
        return baseOffset + 2 * yearSpacing + yearSpacing / 2;
      case 1995:
        return baseOffset + 4 * yearSpacing;
      default:
        const minYear = topYears[0];
        const maxYear = topYears[topYears.length - 1];
        const yearRange = maxYear - minYear;
        const cardPosition =
          ((cardYear - minYear) / yearRange) *
          (yearSpacing * (topYears.length - 1));
        return cardPosition + baseOffset;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const timeline = timelineRef.current;
    const years = yearsRef.current;
    const lines = linesRef.current;

    if (!container || !timeline || !years || !lines) return;

    const scrollWidth = timeline.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(timeline, {
      x: -scrollWidth,
      ease: "none",
    })
      .to(
        years,
        {
          x: -scrollWidth,
          ease: "none",
        },
        0
      )
      .to(
        lines,
        {
          x: -scrollWidth,
          ease: "none",
        },
        0
      );

    const cards = timeline.querySelectorAll(".timeline-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "left 80%",
            end: "left 20%",
            containerAnimation: tl,
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <div className="absolute top-8 left-0 z-10">
        <div
          ref={yearsRef}
          className="flex text-gray-400 text-sm font-medium"
          style={{ width: `${topYears.length * 400}px` }}
        >
          {topYears.map((year, index) => (
            <div
              key={year}
              className="flex-shrink-0"
              style={{
                width: "400px",
                textAlign: "left",
                paddingLeft: "20px",
              }}
            >
              <span>{year}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-16 left-0 z-0">
        <div
          ref={linesRef}
          className="flex"
          style={{
            width: `${topYears.length * 400}px`,
            height: "calc(100vh - 4rem)",
          }}
        >
          {topYears.map((year, index) => (
            <div
              key={`line-${year}`}
              className="flex-shrink-0 relative"
              style={{ width: "400px" }}
            >
              <div
                className="absolute w-px bg-gray-200 h-full"
                style={{ left: "40px" }}
              />
              {index < topYears.length - 1 && (
                <div
                  className="absolute w-px bg-gray-200 h-full"
                  style={{ left: `${40 + 200}px` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        ref={timelineRef}
        className="relative flex h-full"
        style={{ width: `${topYears.length * 400 + 400}px` }}
      >
        {timelineData.map((item, index) => (
          <div
            key={item.year}
            className={`timeline-card absolute ${
              item.position === "top" ? "top-[10%]" : "top-[48%]"
            } transition-all duration-300 ease-out`}
            style={{
              left: `${calculateCardPosition(item.year) - 20}px`,
              transform: hoveredCard === index ? "scale(1.05)" : "scale(1)",
              zIndex: hoveredCard === index ? 50 : 20,
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`bg-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ease-out ${
                hoveredCard === index ? "shadow-2xl" : "hover:shadow-xl"
              }`}
              style={{ width: "356px" }}
            >
              {/* Top Text Section */}
              <div className="p-5 pb-5">
                <span className="text-lg text-gray-400 mb-2.5">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Image */}
              <div className="px-5 pb-5">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="rounded-2xl object-cover"
                  style={{
                    width: "316px",
                    height: "180px",
                  }}
                />
              </div>

              {/* Description */}
              <div
                className={`px-5 pb-5 transition-all duration-300 ease-out overflow-hidden ${
                  hoveredCard === index
                    ? "max-h-32 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-md leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
        <div className="flex items-center space-x-2">
          <span>Scroll to explore</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
