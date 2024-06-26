import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

export const useClickAway = (
  state: boolean,
  setState: Dispatch<SetStateAction<boolean>>,
  ref: RefObject<HTMLElement>
): void => {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
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
  }, [state, setState, ref]);
};
