"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import crewJsonData from "../../data.json";
import Navbar from "@/components/layout/Navbar";

const Crew = () => {
  const [crewData, setCrewData] = useState([]);
  const [selected, setSelected] = useState("Douglas Hurley");
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    setCrewData(crewJsonData.crew);
    const filtered = crewJsonData.crew.filter((crew) => crew.name === selected);
    setShowData(filtered);
  }, [selected]);

  console.log(showData);
  return (
    <section className="bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop main-container">
      <Navbar activeTab="Crew" />
      <div className="container mx-auto px-6 md:px-12 pt-6 md:pt-0">
        <h1 className="font-barlowCondense text-2xl  md:text-4xl uppercase text-center md:text-left px-12 lg:px-0 md:pt-10 lg:pt-0">
          <span className="text-white/[.40] mr-3">O2</span> Meet your Crew
        </h1>
        <section className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between lg:items-start h-auto lg:h-[65vh]  mt-8">
          <div className="relative flex items-center">
            {showData.map((crew) => (
              <Image
                key={crew.name}
                src={crew.images.webp}
                alt={crew.name}
                width={480}
                height={480}
                priority={true}
                className="w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[500px] mx-0 lg:mx-12 object-contain"
              />
            ))}
            <div className="absolute bottom-0 bg-gradient-to-t from-darkBlue to-lightBlue-500 h-32 w-full"></div>
          </div>
          <div className="flex-1 flex flex-col max-w-md items-center justify-between h-full lg:items-start space-y-6 py-8">
            {showData.map((crew) => (
              <div key={crew.name} className="text-center lg:text-left">
                <h4 className="uppercase text-2xl text-darkGrey">
                  {crew.role}
                </h4>
                <h1 className="uppercase text-4xl md:text-5xl my-4">
                  {crew.name}
                </h1>
                <p className="text-lightBlue">{crew.bio}</p>
              </div>
            ))}
            <div className="flex space-x-6">
              {crewData.map((crew) => (
                <button
                  key={crew.name}
                  className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${
                    crew.name === selected ? "bg-white" : "bg-darkGrey"
                  }`}
                  onClick={() => setSelected(crew.name)}
                ></button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Crew;
