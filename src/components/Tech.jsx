import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const mediaQuery = window.matchMedia("(max-width: 500px)");
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies
        .slice(0, mediaQuery.matches ? 6 : technologies.length)
        .map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
