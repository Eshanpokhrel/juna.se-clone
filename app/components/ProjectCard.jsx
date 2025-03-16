import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ title, spans, image }) => {
    const projectCardRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            projectCardRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: projectCardRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }, []);

  return (
    <div ref={projectCardRef} className="bg-transparent w-[650px] h-[450px] flex flex-col justify-between overflow-hidden">
        <div className=" flex justify-between overflow-hidden">
            <h2 className="text-[#181818] text-2xl font-semibold">{title}</h2>

            <div className="flex gap-3">
                {spans.map((span, index) => (
                <span
                key={index}
                className="px-4 py-1 bg-transparent text-[#b1aeae] text-center w-fit h-6 border-1 border-[#b1aeae] rounded-full text-sm "
                >
                {span}
                </span>
                ))}
            </div>
        </div>

        <div className="relative w-full h-full mt-4 overflow-hidden">
            <Image
            src={image}
            alt="Project"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out hover:scale-110"
            />
        </div>
    </div>
  );
};

export default ProjectCard;
