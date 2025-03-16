"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card"; 
import image from "../../public/globe.svg"
import { useEffect, useState } from "react";

const cards = [
  { id: 1, image: image, title: "Website Design", desc: "Explore the magic of great web design. Get websites that are customized, user-friendly, and easy on the eyes – giving your business the digital boost it deserves." },
  { id: 2, image: image, title: "Webflow development", desc: "Get yourself a brand new website created with Webflow! It's a powerful, responsive, and user-friendly site that works seamlessly on all devices." },
  { id: 3, image: image, title: "Illustration", desc: "From doodles to masterpieces, let's breathe life into your ideas through custom illustrations, adding a vibrant visual spark that enhances your brand." },
  { id: 4, image: image, title: "Branding", desc: "Create a new brand identity and logo that resonates with your target audience, leaving a lasting and memorable impression." },
  { id: 5, image: image, title: "Motion design", desc: "Spice up your content with some flair and excitement through motion! Whether it's lively social media posts or dynamic illustrations on your site." },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const CarouselComponent = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null

  return (
    <div className="p-4 w-full h-96 mb-8">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {cards.map((card) => (
          <div key={card.id} className="px-2">
            <Card image={card.image} title={card.title} desc={card.desc} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
