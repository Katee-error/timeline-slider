import React, { useEffect, useState } from "react";
import "./timeline-period.scss";
import { useTriggeredPeriod } from "../../data/hooks";
import gsap from "gsap";

export const TimeLinePeriod: React.FC = () => {
  const triggeredPeriod = useTriggeredPeriod();

  const [startYear, setStartYear] = useState(triggeredPeriod.startYear);
  const [endYear, setEndYear] = useState(triggeredPeriod.endYear);

  useEffect(() => {
    gsap.to(
      { year: startYear },
      {
        year: triggeredPeriod.startYear,
        duration: 0.4,
        onUpdate: function () {
          setStartYear(Math.round(this.targets()[0].year));
        },
      }
    );

    gsap.to(
      { year: endYear },
      {
        year: triggeredPeriod.endYear,
        duration: 0.4,
        onUpdate: function () {
          setEndYear(Math.round(this.targets()[0].year));
        },
      }
    );
  }, [triggeredPeriod, startYear, endYear]);

  return (
    <div className="timeline-period">
      <div className="timeline-period__dates">
        <span className="timeline-period__start-date">{startYear}</span>
        <span className="timeline-period__end-date">{endYear}</span>
      </div>
    </div>
  );
};
