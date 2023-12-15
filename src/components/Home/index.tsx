import Avatar from "./Avatar";
import Clients from "./Clients";
import Intro from "./Intro";
function Home() {
  return (
    <section
      id="home"
      className={`
        h-screen bg-transparent pt-[var(--header-h)] lg:pt-0
        flex flex-col
      `}
    >
      <div className="flex flex-col lg:flex-row-reverse h-5/6">
        <Avatar
          className={`
            w-full lg:w-1/2
            md:h-4/5 lg:h-full
            pt-2 md:pt-0 md:items-center
            flex justify-center md:portrait:items-end
            bg-orange
          `}
        />
        <Intro
          className={`lg:w-1/2 md:h-full flex justify-center items-center bg-blue-`}
        />
      </div>
      <Clients className={"h-1/6 flex flex-col"} />
    </section>
  );
}

export default Home;
