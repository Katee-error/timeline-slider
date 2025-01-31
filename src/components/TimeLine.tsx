import React from "react";
import { TimelineWrapper } from "./timeline-wrapper/TimelineWrapper";
import { CircleTimeline } from "./circle-timeline/CircleTimeLine";
import { EventsWrapper } from "./events-wrapper/EventsWrapper";
import { TimelineHeader } from "./timeline-header/TimeLineHeader";
import { TimeLinePeriod } from "./timeline-period/TimeLinePeriod";

import { SliderControls } from "./slider-controls/SliderControls";

import "./timeline.scss";
import { PeriodTitle } from "./period-title/period-title";

export const Timeline: React.FC = () => {
  return (
    <TimelineWrapper>
      <CircleTimeline />

      <div className="timeline-top-container">
        <TimelineHeader />
        <TimeLinePeriod />
      </div>

      <div className="timeline-bottom-container">
        <div className="timeline-events-group">
          <PeriodTitle />
          <EventsWrapper />
        </div>
        <SliderControls />
      </div>
    </TimelineWrapper>
  );
};
