import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-4xl font-bold">Education</h2>
        <div className="relative mx-auto" style={{ maxWidth: '900px', minHeight: '520px' }}>

          {/* Dashed curved SVG line connecting the two cards */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 900 520"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            style={{ zIndex: 1 }}
          >
            <path
              d="M 430 130 C 530 130, 580 200, 500 280 C 420 360, 480 380, 520 350"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="8 6"
              fill="none"
            />
          </svg>

          {/* Card 01 - Top Left */}
          <div
            className="absolute"
            style={{ top: '0px', left: '40px', width: '420px', zIndex: 2 }}
          >
            <div className="relative rounded-3xl bg-red-500 px-8 pt-10 pb-8 text-white shadow-xl">
              {/* Circle dot at top center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                </div>
              </div>

              <span className="block text-2xl font-serif italic text-white/80 mb-1">01</span>
              <h3 className="text-2xl font-bold leading-tight mb-2">
                Lamrin Tech Skills University Punjab
              </h3>
              <p className="text-sm text-white/90 leading-relaxed mb-5">
                B.Tech, Computer Science and Engineering and specialization in cybersecurity
              </p>
              <div className="flex gap-3">
                <span
                  className="rounded-full bg-white/20 px-4 py-1 text-xs font-mono tracking-wide"
                >
                  Aug 2024– Sept 2026
                </span>
                <span
                  className="rounded-full bg-white/20 px-4 py-1 text-xs font-mono tracking-wide"
                >
                  8.30 CGPA
                </span>
              </div>
            </div>
          </div>

          {/* Card 02 - Bottom Right */}
          <div
            className="absolute"
            style={{ top: '280px', right: '40px', width: '380px', zIndex: 2 }}
          >
            <div className="relative rounded-3xl bg-red-500 px-8 pt-10 pb-8 text-white shadow-xl">
              {/* Circle dot at top center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                </div>
              </div>

              <span className="block text-2xl font-serif italic text-white/80 mb-1">02</span>
              <h3 className="text-2xl font-bold leading-tight mb-2">ATSBV</h3>
              <p className="text-sm text-white/90 leading-relaxed mb-5">
                Senior Secondary – Non medical
              </p>
              <div className="flex gap-3">
                <span
                  className="rounded-full bg-white/20 px-4 py-1 text-xs font-mono tracking-wide"
                >
                  79%
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
