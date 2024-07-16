import { useEffect } from "react";

export const useOverlay = (state: boolean): void => {
  useEffect(() => {
    const overlay = document.getElementById("overlay");

    if (state) {
      overlay?.classList.add("overlay");
    } else {
      overlay?.classList.remove("overlay");
    }
  }, [state]);
};
