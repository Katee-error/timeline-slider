import { useAtom, useAtomValue } from "jotai";
import {
  activePeriodIndexAtom,
  triggeredPeriodIndexAtom,
  timelinePeriodsAtom,
} from "./atoms";
import { useCallback } from "react";

export const useCurrentPeriod = () => {
  const periods = useAtomValue(timelinePeriodsAtom);
  const index = useAtomValue(activePeriodIndexAtom);
  return periods[index];
};

export const useTriggeredPeriod = () => {
  const periods = useAtomValue(timelinePeriodsAtom);
  const index = useAtomValue(triggeredPeriodIndexAtom);
  return periods[index];
};

export const useTimelinePeriodNames = () => {
  const periods = useAtomValue(timelinePeriodsAtom);
  return periods.map(({ theme }, index) => ({ index, theme }));
};

export const useChangeActivePeriodIndex = () => {
  const [activePeriodIndex, setActivePeriodIndex] = useAtom(
    activePeriodIndexAtom
  );
  const periods = useAtomValue(timelinePeriodsAtom);
  const safeSetActivePeriodIndex = useCallback(
    (index: number) => {
      if (!periods[index]) return;
      setActivePeriodIndex(index);
    },
    [setActivePeriodIndex, periods]
  );

  return {
    activePeriodIndex,
    setActivePeriodIndex: safeSetActivePeriodIndex,
  };
};

export const useTriggerPeriodIndex = () => {
  const [triggeredPeriodIndex, triggerPeriodIndex] = useAtom(
    triggeredPeriodIndexAtom
  );
  const periods = useAtomValue(timelinePeriodsAtom);

  const safeTriggerPeriodIndex = useCallback(
    (index: number) => {
      if (!periods[index]) return;
      triggerPeriodIndex(index);
    },
    [triggerPeriodIndex, periods]
  );

  return {
    triggeredPeriodIndex,
    triggerPeriodIndex: safeTriggerPeriodIndex,
  };
};

export const useIsAnimating = () => {
  const triggerPeriodIndex = useAtomValue(triggeredPeriodIndexAtom);
  const activePeriodIndex = useAtomValue(activePeriodIndexAtom);
  return triggerPeriodIndex !== activePeriodIndex;
};
