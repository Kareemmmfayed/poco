import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

export const useClickAwayCart = (
  state: boolean,
  setState: Dispatch<SetStateAction<boolean>>,
  ref: RefObject<HTMLElement>,
  but: RefObject<HTMLElement>
): void => {
  useEffect(() => {
    function handleClickLogin(e: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        but.current &&
        !but.current.contains(e.target as Node)
      ) {
        setState(false);
      }
    }

    if (state) {
      document.addEventListener("mousedown", handleClickLogin);
    }

    return () => {
      if (state) {
        document.removeEventListener("mousedown", handleClickLogin);
      }
    };
  }, [state, setState, ref, but]);
};
