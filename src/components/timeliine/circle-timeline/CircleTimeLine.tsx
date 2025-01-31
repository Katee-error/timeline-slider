import React from "react";
import "./circle-timeline.scss";
import {
  useChangeActivePeriodIndex,
  useTimelinePeriodNames,
} from "../../../data/hooks";
import { activePeriodIndexAtom } from "../../../data/atoms";
import { useAtomValue } from "jotai";

const calculatePosition = (index: number, totalItems: number) => {
  const angle = ((index + 1) / totalItems) * 360;

  const radius = 265;
  const centerX = radius;
  const centerY = radius;

  const radian = (angle - 90) * (Math.PI / 180);
  const x = centerX + radius * Math.cos(radian);
  const y = centerY + radius * Math.sin(radian);

  return { x, y };
};

export const CircleTimeline: React.FC = () => {
  const periodNames = useTimelinePeriodNames();
  const activeIndex = useAtomValue(activePeriodIndexAtom);
  const changeActivePeriodIndex = useChangeActivePeriodIndex();

  return (
    <div className="circle-timeline">
      <div className="circle-container">
        <div className="main-circle"></div>
        {periodNames.map(({ index, theme }) => {
          const position = calculatePosition(index, periodNames.length);
          const isActive = index === activeIndex;
          return (
            <div key={index} className="segment-container">
              <div
                className={`segment-point-wrapper ${isActive ? "active" : ""}`}
                style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                }}
                onClick={() => changeActivePeriodIndex(index)}
              >
                <div className="segment-point">
                  <div className="segment-number">{index + 1}</div>
                </div>
                {isActive && (
                  <div
                    className="active-point-text"
                    style={{ left: "calc(100% + 20px)" }}
                  >
                    {theme}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
