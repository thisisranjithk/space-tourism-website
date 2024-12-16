import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <section className="bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop main-container">
      <Navbar activeTab="Home" />
      <div
        id="home"
        className="flex container mx-auto items-center justify-center min-h-[80vh]"
      >
        <div className="container flex flex-col lg:flex-row gap-16">
          <div className="home-content flex-1 flex items-center lg:items-start flex-col gap-6">
            <h3 className="uppercase font-barlowCondense text-2xl font-light tracking-widest">
              So, you want to travel to
            </h3>
            <h1 className="uppercase text-8xl md:text-9xl">Space</h1>
            <p className="w-[80%] text-center lg:text-left">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience! Explore
            </p>
          </div>
          <div className="relatives flex-1 flex items-center justify-center group ">
            <div className="h-80 w-80 bg-white flex items-center justify-center rounded-full opacity-0 group-hover:opacity-20 "></div>
            <button className="absolute uppercase font-thin h-36 w-36 md:h-60 md:w-60 rounded-full bg-white text-2xl text-black flex items-center justify-center cursor-pointer">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
