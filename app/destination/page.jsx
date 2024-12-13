"use client";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import destinationJsonData from "../../data.json";

const Destination = () => {
  const [destinationData, setDestinationData] = useState([]);
  const [selected, setSelected] = useState("Moon");
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    setDestinationData(destinationJsonData.destinations);

    const filtered = destinationJsonData.destinations.filter(
      (destination) => destination.name === selected
    );

    setShowData(filtered);
  }, [selected]);

  console.log(showData);
  return (
    <section className="bg-destinationDesktop md:bg-destinationTablet lg:bg-destinationDesktop main-container">
      <Navbar />
      <div className="container mx-auto px-6 md:px-0 pt-6 md:pt-0">
        <h1 className="font-barlowCondense text-2xl  md:text-4xl uppercase text-center md:text-left px-12 md:pt-10 lg:pt-0">
          <span className="text-white/[.40] mr-3">O1</span> Pick your
          destination
        </h1>
        <section className="flex flex-col items-center lg:items-start lg:flex-row h-auto lg:h-[65vh]  mt-8">
          <div className=" flex items-center">
            {showData.map((destination) => (
              <Image
                key={destination.name}
                src={destination.images.webp}
                alt={destination.name}
                width={480}
                height={480}
                priority={true}
                className="w-36 h-36 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-0 lg:mx-36 "
              />
            ))}
          </div>
          <div className="flex-1 flex flex-col max-w-md items-center lg:items-start space-y-6 py-8">
            <ul className="flex font-barlowCondense uppercase cursor-pointer space-x-12 justify-center text-base md:text-lg">
              {destinationData.map((destination) => (
                <li
                  key={destination.name}
                  className={`${
                    destination.name === selected ? "border-b-2 pb-2" : ""
                  }`}
                  onClick={() => setSelected(destination.name)}
                >
                  {destination.name}
                </li>
              ))}
            </ul>
            {showData.map((destination) => (
              <div key={destination.name}>
                <div className="border-b-2 pb-8 border-b-white/[.20]">
                  <h2 className="uppercase text-6xl md:text-8xl text-center lg:text-left">
                    {destination.name}
                  </h2>
                  <p className="text-center lg:text-left mt-4 text-lightBlue">
                    {destination.description}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-center lg:justify-start gap-12 mt-6">
                  <div className="text-center lg:text-left">
                    <h4 className="uppercase font-barlowCondense font-light text-lightBlue">
                      Avg. Distance
                    </h4>
                    <p className="text-3xl mt-2">{destination.distance}</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <h4 className="uppercase font-barlowCondense font-light text-lightBlue  ">
                      Est. Travel Time
                    </h4>
                    <p className="text-3xl mt-2">{destination.travel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Destination;
