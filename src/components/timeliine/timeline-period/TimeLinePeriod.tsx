import React from "react";
import "./timeline-period.scss";
import { useCurrentPeriod } from "../../../data/hooks";

export const TimeLinePeriod: React.FC = () => {
  const currentPeriod = useCurrentPeriod();

  return (
    <div className="timeline-period">
      <div className="timeline-period__dates">
        <span className="timeline-period__start-date">{currentPeriod.startYear}</span>
        <span className="timeline-period__end-date">{currentPeriod.endYear}</span>
      </div>
    </div>
  );
};


