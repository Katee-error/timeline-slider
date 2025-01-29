import React from "react";
import { TimelineWrapper } from "./TimelineWrapper";
import { CircleTimeline } from "./CircleTimeLine";

export const Timeline: React.FC = () => {
  return (
    <TimelineWrapper>
      <CircleTimeline />
    </TimelineWrapper>
  );
};
