import { useCallback, useEffect, useState } from "react";

export const useResize = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );
  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
    console.log(screenWidth);
  }, [screenWidth]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, screenWidth]);

  return { screenWidth };
};
