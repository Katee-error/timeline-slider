import React from "react";
import "./period-title.scss";
import { useCurrentPeriod, useIsAnimating } from "../../data/hooks";

export const PeriodTitle: React.FC = () => {
  const currentPeriod = useCurrentPeriod();
  const isAnimating = useIsAnimating();

  return (
    <div className="period-title-wrapper">
      <h1
        className="period-title"
        style={{
          opacity: isAnimating ? 0 : 1,
        }}
      >
        {currentPeriod.theme}
      </h1>
      <div className="period-title-line" />
    </div>
  );
};
