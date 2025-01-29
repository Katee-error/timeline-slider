import React, { ReactNode } from "react";

interface TimelineWrapperProps {
  children: ReactNode;
}

export const TimelineWrapper: React.FC<TimelineWrapperProps> = ({ children }) => {
  return (
    <div className="timeline-container">
      <div className="vertical-center-line" />
      <div className="horizontal-line" />
      {children}
    </div>
  );
};


