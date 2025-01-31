import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  useTimelinePeriodNames,
  useTriggerPeriodIndex,
} from "../../data/hooks";

import "./slider-controls.scss";

export const SliderControls: React.FC = () => {
  const { triggeredPeriodIndex, triggerPeriodIndex } = useTriggerPeriodIndex();
  const periodNames = useTimelinePeriodNames();
  const isFirstSlide = triggeredPeriodIndex === 0;
  const isLastSlide = triggeredPeriodIndex === periodNames.length - 1;

  return (
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
          <ChevronLeft size={24} />
        </button>
        <button
          className={`slider-button ${isLastSlide ? "disabled" : ""}`}
          onClick={() => {
            triggerPeriodIndex(triggeredPeriodIndex + 1);
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
