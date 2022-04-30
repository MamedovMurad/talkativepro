import { useState, useEffect } from "react";
import useWindowDimensions from "./windowDimensions";

export default function useResponsivenenessAdjuster(windowSize: number) {
  const [responsive, setResponsive] = useState<boolean>(false);
  const width = useWindowDimensions()?.width;

  useEffect(() => {
    if (width) {
      if (width < windowSize) {
        setResponsive(true);
      } else {
        setResponsive(false);
      }
    }
  }, [width]);

  return responsive;
}
