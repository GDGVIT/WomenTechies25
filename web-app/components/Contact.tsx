import React from "react";
import HighlightText from "./HighlightText"
const ContactSection = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <div className="max-w-[1920px] h-[1080px] mx-auto relative">
        {/* Background grid pattern - optional */}
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-center bg-no-repeat"></div>
        
        {/* Left laptop */}
        <div className="absolute left-[20%] bottom-[300px] w-[40vw] z-20">
          <img 
            src="/contact/left.svg" 
            alt="Laptop" 
            className="object-contain"
          />
        </div>
        
        {/* Right laptop */}
        <div className="absolute right-[20%] top-[7%] w-[30vw]">
          <img 
            src="/contact/right.svg" 
            alt="Laptop" 
            className="object-contain"
          />
        </div>
      
        
        {/* Contact card */}
        <div className="absolute right-[18%] bottom-[43vh] w-[25vw] z-10">
          <img 
            src="/contact/tag.svg" 
            alt="Contact card"
            className="object-contain"
          />
          
           
        </div>
        </div>
        
        {/* Heading text */}
        <div className="absolute left-[100px] top-[150px] text-white text-6xl font-bold font-heading tracking-wider">
          <div className="flex items-center space-x-4">
            <span>GET</span>
            <span>IN</span>
            <HighlightText text="TOUCH" className="text-6xl   font-bold" />
          </div>
          {/* <div className="flex items-center space-x-4 mt-4">
           
          </div> */}
          <div className="flex items-center space-x-4 mt-4">
            <HighlightText text="WITH" className="text-6xl   font-bold" />
            <span>US.</span>
          </div>
        </div>
        
  </section>
  );
};

export default ContactSection;
