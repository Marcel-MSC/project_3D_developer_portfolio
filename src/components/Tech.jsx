import React from "react";

import { TechCanvas } from "./canvas";
import LazyCanvas from "./LazyCanvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl min-h-[280px]">
        <LazyCanvas fallback={<div className="w-full min-h-[280px] bg-tertiary/10 rounded-2xl" />}>
          <TechCanvas technologies={technologies} />
        </LazyCanvas>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
