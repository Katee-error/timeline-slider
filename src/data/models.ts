export type HistoricalEvent = {
  id: number;
  title: string;
  description: string;
};

export type Period = {
  id: number;
  angle: number;
  startYear: number;
  endYear: number;
  theme: string;
  events: HistoricalEvent[];
};
