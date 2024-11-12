import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Timeline } from ".";
const Qualifications = () => {
  return (
    <section className="py-8 px-4lg:px-[90px]">
      <div>
        <h2 className="text-center text-2xl font-semibold font-mono">
          Work Experience 💼
        </h2>
        <Experience/>
      </div>
      <div className="mt-8">
        <h2 className="text-center text-2xl font-semibold font-mono">
          Education 🎓
        </h2>
        <Timeline />
      </div>
    </section>
  );
};

export default Qualifications;
