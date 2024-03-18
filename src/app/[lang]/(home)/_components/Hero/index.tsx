import Background from "@/app/_shared/components/Background";
import { profileImage } from "@/lib/constants";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex justify-center items-center bg-red-400"
    >
      <Background
        className="relative mx-auto lg:mx-0 min-h-[80dvh] w-full after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-40  bg-blue-"
        src={profileImage}
      />
      <HeroText className={`absolute bg-purple-00`} />
    </section>
  );
}
