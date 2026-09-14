import React from 'react';

const experiences = [
  {
    company: 'Edunet Foundation',
    role: 'Artificial Intelligence Intern',
    period: 'May 2026-Jun 2026',
    mode: 'REMOTE',
    description:
      'Completed a 6-week Artificial Intelligence internship in collaboration with AICTE and IBM SkillsBuild. Gained practical exposure to AI concepts, Python programming, and real-world applications of artificial intelligence.',
  },
  {
    company: 'Rely Task',
    role: 'Cybersecurity Intern',
    period: 'Jul 2025-Nov 2025',
    mode: 'Hybrid',
    description:
      'Gained hands-on experience in cybersecurity concepts and practices, including threat analysis, vulnerability assessment, security tools, and industry research. Assisted in identifying potential security risks and understanding real-world cybersecurity practices.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-4xl font-bold">
          Work Experience<span className="text-red-500">.</span>
        </h2>
        <p className="mb-14 text-gray-500 max-w-2xl leading-relaxed">
          Building in cybersecurity, AI, software development, and technology communities through
          hands-on experience and leadership.
        </p>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start gap-5">
              {/* Timeline dot */}
              <div className="mt-8 flex-shrink-0">
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 group-hover:bg-red-500 ${
                    index === 0 ? 'bg-red-500' : 'bg-gray-300'
                  }`}
                  style={{ position: 'relative', zIndex: 2 }}
                ></div>
              </div>

              {/* Card */}
              <div className="group flex-1 cursor-pointer rounded-3xl border border-gray-200 p-8 transition-all duration-300 hover:border-red-400 hover:bg-gradient-to-br hover:from-red-50/80 hover:to-white hover:shadow-lg [&:hover~div_.dot]:bg-red-500">
                {/* Header row */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-black">{exp.company}</h3>
                  <span className="text-sm text-gray-400 font-mono italic whitespace-nowrap ml-4">
                    {exp.period} · {exp.mode}
                  </span>
                </div>

                {/* Role */}
                <p className="text-red-500 font-semibold mb-4 transition-colors duration-300 group-hover:text-red-600">
                  {exp.role}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
