import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

export const useClickAway = (
  state: boolean,
  setState: Dispatch<SetStateAction<boolean>>,
  ref: RefObject<HTMLElement>,
  but?: RefObject<HTMLElement>
): void => {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const refContainsTarget =
        ref.current && ref.current.contains(e.target as Node);
      const butContainsTarget =
        but && but.current && but.current.contains(e.target as Node);

      if (!refContainsTarget && !butContainsTarget) {
        setState(false);
      }
    }

    if (state) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      if (state) {
        document.removeEventListener("mousedown", handleClick);
      }
    };
  }, [state, setState, ref, but]);
};
