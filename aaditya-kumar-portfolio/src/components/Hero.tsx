import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt direct unmuted autoplay
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If browser blocks unmuted autoplay, play muted first
        video.muted = true;
        video.play().catch(() => {});
      });
    }

    // Automatically unmute on any user movement/click/scroll on the page
    const unmuteAudio = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
      }
      window.removeEventListener('click', unmuteAudio);
      window.removeEventListener('touchstart', unmuteAudio);
      window.removeEventListener('keydown', unmuteAudio);
      window.removeEventListener('scroll', unmuteAudio);
      window.removeEventListener('mousemove', unmuteAudio);
    };

    window.addEventListener('click', unmuteAudio, { once: true });
    window.addEventListener('touchstart', unmuteAudio, { once: true });
    window.addEventListener('keydown', unmuteAudio, { once: true });
    window.addEventListener('scroll', unmuteAudio, { once: true });
    window.addEventListener('mousemove', unmuteAudio, { once: true });

    return () => {
      window.removeEventListener('click', unmuteAudio);
      window.removeEventListener('touchstart', unmuteAudio);
      window.removeEventListener('keydown', unmuteAudio);
      window.removeEventListener('scroll', unmuteAudio);
      window.removeEventListener('mousemove', unmuteAudio);
    };
  }, []);

  return (
    <section id="home" className="relative flex h-screen items-end justify-center overflow-hidden bg-gray-900 pb-16 text-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        src="/assets/hero-bg.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          Hi, I'm Aaditya Kumar<br />
          AI & Cybersecurity Engineer
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-200">
          Building with code, securing with cybersecurity. Exploring ethical hacking, network security & emerging tech. Turning ideas into secure, real-world solutions. Developer | Cybersecurity Enthusiast | Tech Explorer
        </p>
        <div className="flex gap-4">
          <button className="rounded-full bg-white px-8 py-3 font-semibold text-black hover:bg-gray-200">
            View My Work →
          </button>
          <button className="rounded-full border border-white px-8 py-3 font-semibold text-white hover:bg-white/10">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
