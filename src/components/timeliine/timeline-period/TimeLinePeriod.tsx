import React, { useEffect, useState } from "react";
import "./timeline-period.scss";
import { useCurrentPeriod } from "../../../data/hooks";
import gsap from "gsap";

export const TimeLinePeriod: React.FC = () => {
  const currentPeriod = useCurrentPeriod();

  const [startYear, setStartYear] = useState(currentPeriod.startYear);
  const [endYear, setEndYear] = useState(currentPeriod.endYear);

  useEffect(() => {
    gsap.to(
      { year: startYear },
      {
        year: currentPeriod.startYear,
        duration: 0.4,
        onUpdate: function () {
          setStartYear(Math.round(this.targets()[0].year));
        },
      }
    );

    gsap.to(
      { year: endYear },
      {
        year: currentPeriod.endYear,
        duration: 0.4,
        onUpdate: function () {
          setEndYear(Math.round(this.targets()[0].year));
        },
      }
    );
  }, [currentPeriod, startYear, endYear]);

  return (
    <div className="timeline-period">
      <div className="timeline-period__dates">
        <span className="timeline-period__start-date">{startYear}</span>
        <span className="timeline-period__end-date">{endYear}</span>
      </div>
    </div>
  );
};
