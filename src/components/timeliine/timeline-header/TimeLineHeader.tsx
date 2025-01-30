import React from "react";
import "./timeline-header.scss";

export const TimelineHeader: React.FC = () => {
  return (
    <div className="timeline-header-wrapper">
      <div className="left-gradient" />
      <h1 className="timeline-header">Исторические даты</h1>
    </div>
  );
};
