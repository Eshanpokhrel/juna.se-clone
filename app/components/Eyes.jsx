"use client"

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const Eye = ({ className }) => {
  const eyeRef = useRef(null); // Reference for the eye container
  const pupilRef = useRef(null); // Reference for the pupil
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    const movePupil = (e) => {
      if (!eyeRef.current || !pupilRef.current) return;

      const eye = eyeRef.current.getBoundingClientRect();
      const pupil = pupilRef.current;

      const eyeCenterX = eye.left + eye.width / 2;
      const eyeCenterY = eye.top + eye.height / 2;

      // Calculate movement ratio (limit pupil movement within the eye)
      const maxMove = 8; // Maximum movement distance for pupil
      let deltaX = (e.clientX - eyeCenterX) / 15;
      let deltaY = (e.clientY - eyeCenterY) / 15;

      // Ensure the pupil stays within a circular area
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      if (distance > maxMove) {
        const angle = Math.atan2(deltaY, deltaX);
        deltaX = Math.cos(angle) * maxMove;
        deltaY = Math.sin(angle) * maxMove;
      }

      gsap.to(pupil, {
        x: deltaX,
        y: deltaY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", movePupil);
    return () => window.removeEventListener("mousemove", movePupil);
  }, []);

  useEffect(() => {
    const blink = () => {
      setBlinking(true);
      gsap.to(eyeRef.current, {
        scaleY: 0.1,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => setBlinking(false),
      });
    };

    const interval = setInterval(blink, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={eyeRef} className={`relative w-40 h-28 flex justify-center items-center ${className}`}>
      <svg
        width="200" 
        height="175"
        viewBox="0 0 200 175"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,70 Q100,-10 190,70 Q100,150 10,70"
          stroke="#fc6d42"
          strokeWidth="6"
          fill="none"
        />
        <circle ref={pupilRef} cx="100" cy="70" r="35" fill="#fc6d42" />
      </svg>
    </div>
  );
};

const Eyes = () => {
  return (
    <div className="flex justify-center items-center gap-12">
      <Eye />
      <Eye />
    </div>
  );
};

export default Eyes;
