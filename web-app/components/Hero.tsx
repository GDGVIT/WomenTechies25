import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img 
          src="/hero/grid-pattern.svg" 
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-teal-500/10" />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-[1920px] mx-auto h-screen">
        {/* Title */}
        <motion.div 
          className="absolute left-[5%] top-[10%] sm:left-[10%] sm:top-[15%]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-6xl font-heading md:text-7xl lg:text-8xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
            WOMEN
            <br />
            TECHIES' 25
          </h1>
          
          {/* Register Button */}
          <motion.button 
            className="mt-6 px-6 py-3 border border-teal-400 text-teal-400 font-pixel
                     hover:bg-teal-400 hover:text-black transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            REGISTER NOW →
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Clouds */}
          <img 
            src="/hero/cloud-1.svg" 
            alt=""
            className="absolute right-[20%] top-[10%] w-[50px] sm:w-[80px]"
          />
          <img 
            src="/hero/cloud-2.svg" 
            alt=""
            className="absolute right-[30%] top-[5%] w-[40px] sm:w-[60px]"
          />

          {/* Orbital Path */}
          <img 
            src="/hero/orbit.svg" 
            alt=""
            className="absolute right-[5%] top-[5%] w-[100px] sm:w-[150px]"
          />

          {/* Mushrooms */}
          <img 
            src="/hero/Mushrooms.svg" 
            alt=""
            className="absolute left-[10%] bottom-[20%] w-[120px] sm:w-[180px]"
          />

          {/* Plants/Coral */}
          <img 
            src="/hero/plants.svg" 
            alt=""
            className="absolute left-[30%] bottom-[10%] w-[150px] sm:w-[200px]"
          />

          {/* Spaceships */}
          <img 
            src="/hero/spaceship.svg" 
            alt=""
            className="absolute right-[15%] bottom-[30%] w-[100px] sm:w-[150px]"
          />

          {/* Ribbon Elements */}
          <img 
            src="/hero/rightcircle.svg" 
            alt=""
            className="absolute right-[25%] xl:top-[40%] center-y w-[200px] sm:w-[200px]"
          />
           <img 
            src="/hero/Flowers.svg" 
            alt=""
            className="absolute right-[5%] xl:top-[40%] center-y w-[200px] sm:w-[200px]"
          />
        </div>

        {/* Central Character */}
        <motion.div 
          className="absolute left-1/2 bottom-[10%] w-[200px] sm:w-[300px] md:w-[400px]
                     -translate-x-1/2"
          initial={{ y: 20 }}
          animate={{ y: -20 }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 2 
          }}
        >
          <img 
            src="/hero/girl.svg" 
            alt="Character with VR headset"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
