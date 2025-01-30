import React from "react";
import "./circle-timeline.scss";

interface TimelinePoint {
  id: number;
  angle: number;
}

const POINTS: TimelinePoint[] = [
  { id: 1, angle: 60 },
  { id: 2, angle: 120 },
  { id: 3, angle: 180 },
  { id: 4, angle: 240 },
  { id: 5, angle: 300 },
  { id: 6, angle: 360 },
];

export const CircleTimeline: React.FC = () => {
  const calculatePosition = (angle: number) => {
    const radius = 265;
    const centerX = radius;
    const centerY = radius;

    const radian = (angle - 90) * (Math.PI / 180);
    const x = centerX + radius * Math.cos(radian);
    const y = centerY + radius * Math.sin(radian);

    return { x, y };
  };

  return (
    <div className="circle-timeline">
      <div className="circle-container">
        <div className="main-circle"></div>

        {POINTS.map((point) => {
          const position = calculatePosition(point.angle);
          return (
            <div
              key={point.id}
              className={`segment-point point-${point.id}`}
              style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
