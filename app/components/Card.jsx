import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Card = ({ image, title, desc }) => {
  const carouselCardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      carouselCardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: carouselCardRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={carouselCardRef} className="bg-[#fdfbf5] m-4 p-8 rounded-md custom-shadow max-w-[400px] h-[350px]">
      <div className="flex items-start mb-4">
        <Image src={image} alt={title} width={80} height={80} />
      </div>

      <h2 className="text-[#181818] text-[28px] font-extrabold mb-2">{title}</h2>

      <p className="text-[#181818] text-[16px] leading-relaxed">{desc}</p>

    </div>
  );
};

export default Card;
