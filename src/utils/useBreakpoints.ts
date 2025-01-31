import { useState, useEffect } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

const breakpoints: Record<Breakpoint, number> = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
} as const;

const getActiveBreakpoints = () => {
  const width = window.innerWidth;
  console.log(width);
  return new Set(
    (Object.keys(breakpoints) as Breakpoint[]).filter(
      (key) => width < breakpoints[key]
    )
  );
};

export const useBreakpoints = () => {
  const [activeBreakpoints, setActiveBreakpoints] =
    useState<Set<Breakpoint>>(getActiveBreakpoints);

  useEffect(() => {
    const handleResize = () => {
      setActiveBreakpoints(getActiveBreakpoints());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return activeBreakpoints;
};
