import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-red-500 py-20 text-white">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="rounded-2xl bg-black p-2">
            <img 
              src="/assets/WhatsApp Image 2026-09-07 at 9.13.23 PM.jpeg" 
              alt="Aaditya kumar" 
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
            I'M LOOKING FOR INTERNSHIP AND JOB OPPORTUNITIES
          </span>
          <h2 className="mb-6 text-4xl font-bold">What I'm Looking For</h2>
          <p className="text-lg leading-relaxed text-gray-100">
            Hi, my name is Aaditya kumar Aaditya kumar'm currently pursuing my B.Tech in Cybersecurity, while also developing my skills in software development and emerging technologies. I'm looking for internship and job opportunities where I can apply my skills, work on real-world projects, and learn from experienced professionals. I'm passionate about building secure solutions, solving problems, and continuously growing as a cybersecurity professional and developer. I'm always open to connecting with people and organizations looking for motivated young talent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
