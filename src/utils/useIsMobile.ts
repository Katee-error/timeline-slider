import { useBreakpoints } from "./useBreakpoints";

export const useIsMobile = () => {
  const activeBreakpoints = useBreakpoints();
  return activeBreakpoints.has("mobile");
};
