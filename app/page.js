"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Eyes from './components/Eyes'
import Image from 'next/image'
import hand from '../public/hand.svg'

const Page = () => {
  const subtitleRef = useRef(null)
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const titleContainerRef = useRef(null)
  const handContainerRef = useRef(null)
  
  useEffect(() => {
    const textAnimations = gsap.timeline()
    
    textAnimations.fromTo(
      descriptionRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
    )
    
    //Used "+=0" to ensure next animation starts EXACTLY when previous one ends
    textAnimations.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
      "+=0" // Force exact timing with no delay
    )
    
    textAnimations.fromTo(
      subtitleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: 'power2.out' },
      "+=0" // Force exact timing with no delay
    )
    
    textAnimations.add(() => {
      const bounceTl = gsap.timeline({
        repeat: -1, // Infinite repeat
        repeatDelay: 2, // Longer pause between each full cycle
      })
      
      bounceTl.to(
        [titleContainerRef.current, handContainerRef.current], 
        { 
          y: -20, // Slightly less movement for subtlety
          duration: 1.2, // Much slower upward movement
          ease: "power2.out" // Smoother upward motion
        }
      )
      
      bounceTl.to(
        [titleContainerRef.current, handContainerRef.current], 
        { 
          y: 0, 
          duration: 1.8, // Much slower downward movement with spring
          ease: "elastic.out(1, 0.3)" // Gentler springiness
        }
      )
      
      return bounceTl
    })
    
  }, [])
  
  return (
    <div className='w-full h-screen pt-14 bg-[#fffdf6] flex flex-col items-center gap-7'>
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
    </div>
  )
}

export default Page