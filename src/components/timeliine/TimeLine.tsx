import React from "react";
import { TimelineWrapper } from "./TimelineWrapper";
import { CircleTimeline } from "./CircleTimeLine";
// import { EventsWrapper } from "../historical-events/EventsWrapper";
import { TimelineHeader } from "./TimeLineHeader";
import { TimeLinePeriod } from "./TimeLinePeriod";

export const Timeline: React.FC = () => {
  return (
    <TimelineWrapper>
      <TimelineHeader/>
      <CircleTimeline />
      <TimeLinePeriod startDate="1991" endDate="2022"/>
      {/* <EventsWrapper activePeriod={1}/> */}
    </TimelineWrapper>
  );
};
