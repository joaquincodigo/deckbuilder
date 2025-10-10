import { useState, useEffect } from "react";

export function useViewportWidth() {
  /*
    We need the viewport's width to calculate row width for the <Grid />
    component of the React-Window library.

    Code is wrapped in useEffect to prevent NextJS from running it in 
    the server and causing an HTML mismatch and hydration error.
  */

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }

    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
