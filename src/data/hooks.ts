import { useAtomValue, useSetAtom } from "jotai";
import { activePeriodIndexAtom, timelinePeriodsAtom } from "./atoms";
import { useCallback } from "react";

export const useCurrentPeriod = () => {
  const periods = useAtomValue(timelinePeriodsAtom);
  const index = useAtomValue(activePeriodIndexAtom);
  return periods[index];
};

export const useTimelinePeriodNames = () => {
  const periods = useAtomValue(timelinePeriodsAtom);
  return periods.map(({ theme }, index) => ({ index, theme }));
};

export const useChangeActivePeriodIndex = () => {
  const setActivePeriodIndex = useSetAtom(activePeriodIndexAtom);
  const periods = useAtomValue(timelinePeriodsAtom);
  const activeIndex = useAtomValue(activePeriodIndexAtom);

  return useCallback(
    (index: number) => {
      if (index >= 0 && index < periods.length && index !== activeIndex)
        setActivePeriodIndex(index);
    },
    [setActivePeriodIndex, periods.length, activeIndex]
  );
};
