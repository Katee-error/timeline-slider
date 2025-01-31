import React from "react";
import { TimelineWrapper } from "./timeline-wrapper/TimelineWrapper";
import { CircleTimeline } from "./circle-timeline/CircleTimeLine";
import { EventsWrapper } from "../historical-events/events-wrapper/EventsWrapper";
import { TimelineHeader } from "./timeline-header/TimeLineHeader";
import { TimeLinePeriod } from "./timeline-period/TimeLinePeriod";
import "./timeline.scss";

export const Timeline: React.FC = () => {
  return (
    <>
      <TimelineWrapper>
        <TimelineHeader />
        <EventsWrapper activePeriod={1} />
        <div className="crosshair-wrapper">
          <div className="horizontal-line" />
          <CircleTimeline />
          <TimeLinePeriod/>
        </div>
      </TimelineWrapper>
    </>
  );
};
