import React from "react";
import { useEffect, useState } from "react";
import { useRive } from "@rive-app/react-canvas";
import HighlightText from "./HighlightText";
import AtomIcon from "./AtomIcon";
const HeroSection: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIfDesktop();
    window.addEventListener("resize", checkIfDesktop);
    return () => window.removeEventListener("resize", checkIfDesktop);
  }, []);

  const { RiveComponent: Mushroom } = useRive({
    src: "/public/hero/mushroom.riv",
    autoplay: true,
  });

  const { RiveComponent: Plant } = useRive({
    src: "/public/hero/plant.riv",
    autoplay: true,
  });

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
 
      <div className="absolute inset-0 -z-10 flex items-end">
       
        <img
          src="/public/hero/grid.svg"
          alt="Background Grid"
          className="w-full h-auto object-cover opacity-50"
        />
        <img
          src="/public/hero/bottomshape.svg"
          alt="Background Grid"
          className="absolute bottom-0 right-0 w-[40vw] h-auto object-cover transform scale-x-[-1]"
        />
        <img
          src="/public/hero/bottomshape.svg"
          alt="Background Grid"
          className="absolute top-0 left-0 w-[25vw] h-auto object-cover"
        />

        {/* Gradient Blurs */}
        <div
          className="absolute -top-[10vh] -left-[17vw] w-[30vw] min-w-[400px] h-[40vw] max-w-[500px] max-h-[500px] opacity-80"
          style={{
            borderRadius: "447px",
            border: "19px solid #CCF193",
            background: "#CCB0C1",
            filter: "blur(72.55000305175781px)",
          }}
        />
        <div
          className="absolute -top-[20vh] left-[7vw] w-[40vw] min-w-[300px] h-[40vw] min-h-[400px] max-w-[500px] max-h-[500px] opacity-80"
          style={{
            borderRadius: "752px",
            background: "#659EA2",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute top-0 -right-[10vw] w-[10vw] min-w-[200px] h-[40vw] max-w-[500px] max-h-[500px] opacity-80"
          style={{
            borderRadius: "752px",
            background: "#FFFFFF",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute -bottom-[30vh] left-0 w-[5vw] min-w-[100px] h-[40vw] max-w-[500px] max-h-[500px] opacity-80"
          style={{
            borderRadius: "352px",
            background: "#FFFFFF",
            filter: "blur(100px)",
          }}
        />

        <div className="absolute bottom-[0.5vh] left-0 w-full md:w-[90vw] lg:w-[80vw] h-[15vh]">
          <img
            src="/public/hero/water.svg"
            alt="Water base"
            className="absolute bottom-0   z-9999  object-contain mx-auto"
          />
        </div>
        <div className="absolute top-[30vh] right-0 w-[25vw] h-[25vw]">
          <AtomIcon />
        </div>
 
        <div className="absolute top-0 left-0 right-0 w-full">
 
          <img
            src="/public/hero/moon.svg"
            alt="Moon"
            className="absolute top-[5vh] right-[15%] w-[15vw] max-w-[150px] h-auto"
          /> 
          <img
            src="/public/hero/cloud.svg"
            alt="Cloud 1"
            className="absolute top-[20vh] left-1/3 w-[7vw]   h-[3vh]"
          />
          <img
            src="/public/hero/cloud.svg"
            alt="Cloud 2"
            className="absolute top-[30vh] right-[25%] w-[7vw] h-[3vh]"
          />
        </div>
      </div> 
      <div className="absolute top-[15vh] md:top-[15vh] left-[8%] z-20">
        <h1 className="font-mono">
          <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-8xl leading-none font-heading text-pink-200">
            WOMEN
          </span>
          <div className="flex items-center">
            <HighlightText
              text="TECHIES"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-8xl leading-none text-pink-200"
              animationDuration={1.5}
            />
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl leading-none font-heading text-pink-200 ml-2">
              '25
            </span>
          </div>
        </h1>

        <a
          href="#register"
          className="inline-flex items-center mt-6 md:mt-8 px-4 md:px-6 py-2 border border-[#7CFFC4] text-[#7CFFC4] hover:bg-[#7CFFC4]/10 transition-colors duration-300 font-mono text-base md:text-lg"
        >
          REGISTER NOW
          <span className="ml-2 md:ml-4">-&gt;</span>
        </a>
      </div>
 
      <div
        className="absolute left-1/2 -translate-x-1/2 z-9999 flex items-center justify-center 
  lg:bottom-[0vh] lg:translate-y-0 
  bottom-1/2 translate-y-1/2"
      > 
        <div className="relative w-[50vw] sm:w-[40vw] md:w-[35vw] lg:w-[30vw] flex items-center justify-center ">
 
          <img
            src="/public/hero/girl.svg"
            alt="Girl with VR headset"
            className="w-[70vw] xl:w-[18vw] z-99999 object-contain"
          />

          {/* Textbox overlay (On top of girl) */}
          <img
            src="/public/hero/textbox.svg"
            alt="Text scrolls"
            className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[70vw] xl:w-[40vw] object-contain"
          />
        </div>
      </div>
 
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full"> 
        <div className="absolute bottom-0 left-0 z-20">
          {isDesktop ? (
            <> 
              <div className="relative">
                <div className="absolute bottom-[10vh] left-0">
                  <Mushroom className="w-[25vw] h-[25vw]" />
                </div>
                <div className="absolute -bottom-[20vw] left-[15vw]">
                  <Plant className="w-[25vw] h-[50vw]" />
                </div>
              </div>
            </>
          ) : (
            // ,obile version with only mushroom
            <div className="absolute bottom-[10vh] left-0">
              <Mushroom className="w-[30vw] h-[30vw]" />
            </div>
          )}
        </div>
 
        {isDesktop && (
          <div className="absolute bottom-[5vh] right-[5%] z-20">
            <img
              src="/public/hero/flowers.svg"
              alt="Flowers"
              className="w-[12vw] h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
