import { indie } from "@/lib/constants";

function About() {
  return (
    <section
      id="about"
      className={`bg-red-500 h-screen pt-[var(--header-h)] flex justify-center items-center`}
    >
      <span className={`${indie.className} text-xl`}>Coming Soon!</span>
    </section>
  );
}

export default About;
