/**
 * show if scrollY < 50
 * hide on scroll down if scrollY >= 50
 * show on scroll up
 * TODO: Make it better by adding the useSyncExternalStore()
 * * Click Here to see how https://thisweekinreact.com/articles/useSyncExternalStore-the-underrated-react-api
 */

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

const direction = (prev: number, curr: number) => (prev > curr ? -1 : 1); // -1 : up, 1: down
let prevDirection = 0;

export type SetHideType = Dispatch<SetStateAction<boolean>>;
export default function useHideOnScroll(
  scrolY: number = 0,
): [number, boolean, SetHideType] {
  const [hide, setHide] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    const currDir = direction(scrollY, window.scrollY);

    if (prevDirection !== currDir && currDir === -1) setHide(false);
    else if (prevDirection !== currDir && currDir === 1 && window.scrollY >= 50)
      setHide(true);

    if (window.scrollY >= 50) prevDirection = currDir;
    setScrollY(window.scrollY);
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return [scrollY, hide, setHide];
}
