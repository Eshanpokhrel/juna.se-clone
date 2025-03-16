"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Eyes from './components/Eyes'
import Image from 'next/image'
import hand from '../public/hand.svg'
import RotatingWheel from './components/Wheel'
import CarouselComponent from './components/Carousel'
import ProjectCard from './components/ProjectCard'
import image from "../public/project.webp"

const Page = () => {
  const subtitleRef = useRef(null)
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const titleContainerRef = useRef(null)
  const handContainerRef = useRef(null)
  
  useEffect(() => {
    const masterTimeline = gsap.timeline()
    
    const textAnimations = gsap.timeline()
    
    textAnimations.fromTo(
      descriptionRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
    )
    
    textAnimations.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
      "+=0" // Force exact timing with no delay
    )
    
    textAnimations.fromTo(
      subtitleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: 'power3.out' },
      "+=0" // Force exact timing with no delay
    )
    
    masterTimeline.add(textAnimations)
    
    masterTimeline.to(
      [titleContainerRef.current, handContainerRef.current],
      {
        y: 20, 
        duration: 2.5, 
        ease: "power3.out", 
        delay: 0.3 
      },
      "+=0" // Start immediately after text animations
    )
    
    const createBounceAnimation = (element, baseDelay, amplitude) => {
      const tl = gsap.timeline({
        repeat: -1,
        delay: baseDelay
      });
      
      tl.to(element, {
        y: -amplitude, 
        duration: 2.5,
        ease: "power2.out" 
      });
      
      tl.to(element, {
        y: amplitude * 0.5, 
        duration: 2.5,
        ease: "bounce.out" 
      });
      
      tl.to(element, {
        y: 0, 
        duration: 2.5,
        ease: "power1.inOut" 
      });
      
      tl.to(element, {
        y: 0, 
        duration: 2.5,
        ease: "none" // No movement
      });
    };
    
    createBounceAnimation(subtitleRef.current, 1.0, 8); 
    createBounceAnimation(headingRef.current, 1.2, 12); 
    createBounceAnimation(descriptionRef.current, 1.4, 10); 
    
    const cycleTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5 
    });

    cycleTimeline.to(
      [titleContainerRef.current, handContainerRef.current],
      {
        y: 20, 
        duration: 2,
        ease: "none" 
      }
    );

    cycleTimeline.to(
      [titleContainerRef.current, handContainerRef.current],
      {
        y: -20, 
        duration: 2.5, 
        ease: "power2.inOut" 
      }
    );

    cycleTimeline.to(
      [titleContainerRef.current, handContainerRef.current],
      {
        y: -20, 
        duration: 1.5, 
        ease: "none" 
      }
    );

    cycleTimeline.to(
      [titleContainerRef.current, handContainerRef.current],
      {
        y: 20, 
        duration: 2.5,
        ease: "power2.inOut"
      }
    );


    masterTimeline.add(cycleTimeline, "+=0.5");

    return () => {
      masterTimeline.kill()
    }
  }, [])
  
  return (
    <div className='w-full h-full pt-14 bg-[#fffdf6] flex flex-col items-center gap-7'>
      <div className='eyes-container'>
        <Eyes/>
      </div>
      <div 
        ref={titleContainerRef}
        className='title-text flex flex-col items-center justify-center w-2/4 gap-7'
      >
        <p 
          ref={subtitleRef} 
          className='text-[#B1AEAE] text-[11px] text-center opacity-0'
        >
          BRINGING YOUR VISION TO LIFE
        </p>
        <h1 
          ref={headingRef}
          className='text-[#181818] text-6xl text-center font-extrabold opacity-0'
        >
          Crafting great digital experiences
        </h1>
        <p 
          ref={descriptionRef}
          className='w-[70%] text-[#181818] text-xl text-center font-medium opacity-0'
        >
          Freelance digital designer specializing in web design and Webflow development
        </p>
      </div>
      <div 
        ref={handContainerRef}
        className='hand-container self-end -mt-8'
      >
        <Image
          src={hand}
          alt='hand'
          height={502}
          width={1250}
        />
      </div>
      <RotatingWheel/>
      <div className='service-container p-14 w-screen h-auto flex flex-col justify-center items-start bg-[#fffdf6] gap-10'>
        <span className=' p-2.5 text-[#B1AEAE] text-[14px]'>What I do best</span>
        <h1 className='-mt-8 text-[#181818] text-6xl'><strong>Services</strong></h1>
        <CarouselComponent/>
      </div>
      <div className='project-container p-14 w-full h-auto flex flex-col justify-center items-start bg-[#fffdf6] gap-10'>
        <span className=' p-2.5 text-[#B1AEAE] text-[14px]'>Made with love</span>
        <h1 className='-mt-8 text-[#181818] text-6xl'><strong>Projects</strong></h1>
        <div className='grid grid-cols-2 grid-rows-2 gap-8'>
          <ProjectCard
            title="Gyld Agency"
            spans={["WEBFLOW", "UI"]}
            image={image}
            />
          <ProjectCard
            title="Gyld Agency"
            spans={["UI"]}
            image={image}
            />
          <ProjectCard
            title="Gyld Agency"
            spans={["WEBFLOW"]}
            image={image}
            />
          <ProjectCard
            title="Gyld Agency"
            spans={["WEBFLOW", "UI"]}
            image={image}
            />
        </div>
      </div>
    </div>
  )
}

export default Page