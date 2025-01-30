import React, { ReactNode } from "react";
import "./timeline-wrapper.scss";

interface TimelineWrapperProps {
  children: ReactNode;
}

export const TimelineWrapper: React.FC<TimelineWrapperProps> = ({
  children,
}) => {
  return (
    <div className="timeline-scroll-wrapper">
      <div className="timeline-wrapper">
        <div className="timeline-container">{children}</div>
        <div className="vertical-center-line" />
      </div>
    </div>
  );
};
