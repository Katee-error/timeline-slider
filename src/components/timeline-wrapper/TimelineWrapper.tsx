import React, { ReactNode } from "react";
import "./timeline-wrapper.scss";
import { useIsMobile } from "../../utils/useIsMobile";

interface TimelineWrapperProps {
  children: ReactNode;
}

export const TimelineWrapper: React.FC<TimelineWrapperProps> = ({
  children,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="timeline-scroll-wrapper">
      <div className="timeline-wrapper">
        <div className="timeline-container">
          {isMobile ? null : <div className="horizontal-line" />}
          {children}
        </div>
        {isMobile ? null : <div className="vertical-center-line" />}
      </div>
    </div>
  );
};
