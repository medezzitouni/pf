"use client";
import Background from "@/app/_shared/components/Background";
import Services from "@/app/_shared/components/Services";
import ShortStory from "@/app/_shared/components/ShortStory";
import { profileImage, serviceImage } from "@/lib/constants";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HeroText from "./_components/Hero/HeroText";

export default function Index() {
  return (
    <main className="flex flex-col bg-white dark:bg-black dark:text-white">
      <Parallax pages={4} style={{ top: "0", left: "0" }}>
        <ParallaxLayer factor={0.8} offset={0} speed={0.25} className="-z-10">
          {/* <Hero /> */}
          <Background
            containerStyle="relative mx-auto lg:mx-0 min-h-[80dvh] w-full after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-40  bg-blue-"
            src={profileImage}
            imageStyle="object-cover object-top blur-[2px]"
          />
        </ParallaxLayer>
        <ParallaxLayer
          factor={0.8}
          offset={0}
          speed={0.5}
          className="relative flex justify-center items-end md:items-center bg-blue-00"
        >
          <HeroText className={` bg-purple-00`} />
        </ParallaxLayer>
        <ParallaxLayer
          factor={0.3}
          offset={0.8}
          speed={0.4}
          className="bg-red-00 "
        >
          <ShortStory />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.2}
          className="bg-indigo-00 -z-10  md:-mt-32"
        >
          <Background
            containerStyle="mx-auto lg:mx-0"
            imageStyle="object-cover object-top"
            src={serviceImage}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.3}
          className="bg-indigo-00 mt-32 md:mt-0"
        >
          <Services />
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
