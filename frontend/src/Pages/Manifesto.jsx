import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Manifesto.css';
import Video from '../assets/M_background.mp4';

gsap.registerPlugin(ScrollTrigger);

const Manifesto = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const onLoaded = () => {
      gsap.to(video, {
        currentTime: video.duration || 1,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=1500',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    };

    video.addEventListener('loadedmetadata', onLoaded);

    return () => {
      video.removeEventListener('loadedmetadata', onLoaded);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="manifesto-wrapper" ref={containerRef}>
      <video
        ref={videoRef}
        src={Video}
        className="manifesto-video"
        muted
        preload="auto"
      />
    </div>
  );
};

export default Manifesto;