import { atom } from "jotai";
import { Period } from "./models";
import historicalData from "./historical-data.json";

export const timelinePeriodsAtom = atom<Period[]>(historicalData.periods);

export const triggeredPeriodIndexAtom = atom<number>(0);
export const activePeriodIndexAtom = atom<number>(0);
