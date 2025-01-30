import React from "react";
import "./timeline-period.scss";

interface TimeLinePeriodProps {
  startDate: string;
  endDate: string;
}

export const TimeLinePeriod: React.FC<TimeLinePeriodProps> = ({
  startDate,
  endDate,
}) => {
  return (
    <div className="timeline-period">
      <div className="timeline-period__dates">
        <span className="timeline-period__start-date">{startDate}</span>
        <span className="timeline-period__end-date">{endDate}</span>
      </div>
    </div>
  );
};


