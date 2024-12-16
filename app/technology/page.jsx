"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import technologyJsonData from "../../data.json";
import Image from "next/image";
const Technology = () => {
  const [technologyData, setTechnologyData] = useState([]);
  const [selected, setSelected] = useState("Launch vehicle");
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    setTechnologyData(technologyJsonData.technology);
    const filtered = technologyJsonData.technology.filter(
      (technology) => technology.name === selected
    );
    setShowData(filtered);
  }, [selected]);

  console.log(showData);
  return (
    <section className="bg-technologyMobile md:bg-technologyTablet lg:bg-technologyDesktop main-container">
      <Navbar activeTab="Technology" />
      <div className="flex flex-col ml-0 lg:ml-[10%] justify-between">
        <h1 className="font-barlowCondense text-2xl  md:text-4xl uppercase text-center md:text-left px-12 lg:px-0 md:pt-10 lg:pt-0">
          <span className="text-white/[.40] mr-3">O3</span> Space Launch 101
        </h1>
        <section className="flex flex-col-reverse lg:flex-row h-auto lg:h-[65vh] mt-8">
          <div className="flex-1 flex flex-col lg:flex-row items-center  space-x-0 space-y-12 lg:space-y-0 my-12 px-4 lg:my-0 lg:space-x-12">
            <div className="flex flex-row lg:flex-col space-y-0 space-x-6 lg:space-y-6 lg:space-x-0 items-center">
              {technologyData.map((technology, index) => (
                <div
                  key={technology.name}
                  onClick={() => setSelected(technology.name)}
                  className="h-16 w-16 rounded-full flex items-center justify-center border-2 cursor-pointer"
                >
                  <span className="text-white">{index + 1}</span>
                </div>
              ))}
            </div>
            {showData.map((technology) => (
              <div
                key={technology.name}
                className="flex flex-col space-y-8 text-center lg:text-left md:max-w-xl"
              >
                <h4 className="uppercase text-2xl text-darkGrey">
                  THE TERMINOLOGY…
                </h4>
                <h1 className="text-4xl md:text-5xl uppercase">
                  {technology.name}
                </h1>
                <p className="text-lightBlue">{technology.description}</p>
              </div>
            ))}
          </div>
          <div className="relative flex-1 flex items-center justify-end">
            {showData.map((technology) => (
              <Image
                key={technology.name}
                src={technology.images.portrait}
                alt={technology.name}
                width={480}
                height={480}
                priority={true}
                className="w-full h-auto md:h-80 lg:w-[500px] lg:h-[450px] object-cover"
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Technology;
