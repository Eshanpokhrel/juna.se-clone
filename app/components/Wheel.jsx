"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RotatingWheel = () => {
  const wheelRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      wheelRef.current,
      { opacity: 0, x: "-30px" }, 
      { opacity: 1, x: "30px", duration: 0.8, ease: "power3.out", delay: 1.5 }
    );

    tl.to(wheelRef.current, {
      rotation: 360,
      duration: 0.1,
      ease: "power1.out",
    });

    gsap.to(wheelRef.current, {
      rotation: "+=360",
      repeat: -1,
      duration: 5, 
      ease: "linear",
    });
  }, []);

  return (
    <div ref={wheelRef} className="absolute bottom-10 left-10">
      <svg
        width="160"
        height="160"
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="110" cy="110" r="100" fill="#EEFF99" />

        <defs>
          <path
            id="circlePath"
            d="M 110,110 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          />
        </defs>

        <text fontSize="22" fill="#181818" letterSpacing="1.5px">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            BASED IN GOTHENBURG, SWEDEN ~
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default RotatingWheel;
