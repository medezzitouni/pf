import { indie } from "@/lib/constants";

function About() {
  return (
    <section
      id="projects"
      className={`bg-purple-500 h-screen pt-[var(--header-h)] flex justify-center items-center`}
    >
      <span className={`${indie.className} text-xl`}>Coming Soon!</span>
    </section>
  );
}

export default About;
