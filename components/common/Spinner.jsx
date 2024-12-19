"use client";

import { BeatLoader } from "react-spinners";

const Spinner = () => {
  return (
    <section className="h-screen w-screen flex items-center justify-center bg-darkBlue">
      <BeatLoader color="#e5efff" cssOverride={{}} loading size={60} />
    </section>
  );
};

export default Spinner;
