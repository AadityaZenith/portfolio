import React from 'react';

const skillCategories = [
  {
    title: 'SKILLS',
    titleColor: 'text-red-500',
    count: 1,
    type: 'block' as const,
    skills: [
      'Cybersecurity Ethical Hacking Network Security Python Web Development JavaScript SQL Linux Git & GitHub AI/ML Secure Coding Problem Solving',
    ],
  },
  {
    title: 'AI & PROTOTYPING',
    titleColor: 'text-black',
    count: 12,
    type: 'chips' as const,
    skills: [
      'ChatGPT',
      'Claude',
      'Gemini',
      'Flow',
      'Stitch',
      'NotebookLM',
      'Replit',
      'Lovable',
      'Prompt Engineering',
      'Rapid Prototyping',
      'AI Video Editing',
      'Claude Design',
    ],
  },
  {
    title: 'TOOLS & CLOUD',
    titleColor: 'text-black',
    count: 8,
    type: 'chips' as const,
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux', 'CI/CD', 'AWS', 'Figma'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-4xl font-bold">
          Skills<span className="text-red-500">.</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group cursor-pointer rounded-3xl border border-gray-200 p-8 transition-all duration-300 hover:border-red-400 hover:bg-red-50/60 hover:shadow-lg"
            >
              {/* Header row */}
              <div className="mb-5 flex items-center justify-between">
                <h3 className={`text-sm font-bold tracking-wider ${category.titleColor} group-hover:text-red-500 transition-colors duration-300`}>
                  {category.title}
                </h3>
                <span className="text-sm italic text-gray-400 font-mono">
                  {category.count} {category.count === 1 ? 'skill' : 'skills'}
                </span>
              </div>

              {/* Skills content */}
              {category.type === 'block' ? (
                <div className="rounded-2xl border border-dashed border-gray-300 px-5 py-4 text-sm leading-relaxed text-gray-600 transition-all duration-300 group-hover:border-red-300 group-hover:bg-white">
                  {category.skills[0]}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:bg-red-500 hover:text-white hover:scale-105 hover:shadow-md cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
