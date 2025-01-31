import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  useTimelinePeriodNames,
  useTriggerPeriodIndex,
} from "../../data/hooks";

import "./slider-controls.scss";
import { useIsMobile } from "../../utils/useIsMobile";

export const SliderControls: React.FC = () => {
  const { triggeredPeriodIndex, triggerPeriodIndex } = useTriggerPeriodIndex();
  const periodNames = useTimelinePeriodNames();
  const isFirstSlide = triggeredPeriodIndex === 0;
  const isLastSlide = triggeredPeriodIndex === periodNames.length - 1;

  const isMobile = useIsMobile();

  return (
    <div className="slider-controls-wrapper">
      <div className="slider-controls-container">
        <div className="slider-controls-text">
          {`0${triggeredPeriodIndex + 1}/0${periodNames.length}`}
        </div>
        <div className="slider-controls">
          <button
            className={`slider-button ${isFirstSlide ? "disabled" : ""}`}
            onClick={() => {
              triggerPeriodIndex(triggeredPeriodIndex - 1);
            }}
          >
            <ChevronLeft strokeWidth={3} size={isMobile ? 12 : 24} />
          </button>
          <button
            className={`slider-button ${isLastSlide ? "disabled" : ""}`}
            onClick={() => {
              triggerPeriodIndex(triggeredPeriodIndex + 1);
            }}
          >
            <ChevronRight strokeWidth={3} size={isMobile ? 12 : 24} />
          </button>
        </div>
      </div>
      <div className="slider-dot-container">
        {periodNames.map((_, index) => (
          <div
            onClick={() => triggerPeriodIndex(index)}
            className={`slider-dot ${
              index === triggeredPeriodIndex ? "slider-dot-active" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
