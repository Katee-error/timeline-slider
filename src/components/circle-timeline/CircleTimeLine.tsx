import React, { useEffect } from "react";
import "./circle-timeline.scss";
import {
  useChangeActivePeriodIndex,
  useIsAnimating,
  useTimelinePeriodNames,
  useTriggerPeriodIndex,
} from "../../data/hooks";
import gsap from "gsap";
import { useIsMobile } from "../../utils/useIsMobile";

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
  const { activePeriodIndex, setActivePeriodIndex } =
    useChangeActivePeriodIndex();
  const { triggeredPeriodIndex, triggerPeriodIndex } = useTriggerPeriodIndex();
  const isAnimating = useIsAnimating();
  const isMobile = useIsMobile();

  useEffect(() => {
    const prevAngle = (activePeriodIndex / periodNames.length) * 360;
    const angle = (triggeredPeriodIndex / periodNames.length) * 360;

    const baseAngle = 60;
    const durationForBaseAngle = 0.33;
    const angleDiff = Math.abs(prevAngle - angle);
    const shortPathAngleDiff = angleDiff > 180 ? 360 - angleDiff : angleDiff;
    const duration = isMobile
      ? durationForBaseAngle
      : (Math.abs(shortPathAngleDiff) / baseAngle) * durationForBaseAngle;

    gsap.to(".circle-container", {
      rotate: -angle + "_short",
      duration,
      ease: "none",
    });
    gsap.to(".segment-point-wrapper", {
      rotate: angle + "_short",
      duration,
      ease: "none",
      onComplete: () => {
        setActivePeriodIndex(triggeredPeriodIndex);
      },
    });
  }, [
    activePeriodIndex,
    triggeredPeriodIndex,
    periodNames.length,
    setActivePeriodIndex,
    isMobile,
  ]);

  return (
    <div className="circle-timeline">
      <div className="circle-container">
        <div className="main-circle"></div>
        {periodNames.map(({ index, theme }) => {
          const position = calculatePosition(index, periodNames.length);
          const isActive = index === triggeredPeriodIndex;
          return (
            <div key={index} className="segment-container">
              <div
                className={`segment-point-wrapper ${isActive ? "active" : ""}`}
                style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                }}
                onClick={() => triggerPeriodIndex(index)}
              >
                <div className="segment-point">
                  <div className="segment-number">{index + 1}</div>
                </div>
                <div
                  className="active-point-text"
                  style={{
                    opacity: !isActive || isAnimating ? 0 : 1,
                  }}
                >
                  {theme}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
