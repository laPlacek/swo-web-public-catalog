import deepEqual from "deep-equal";
import { useEffect, useState } from "react";

const ZERO = {
  width: 0,
  height: 0,
  x: 0,
  y: 0,
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
};

export type Rect = Omit<DOMRectReadOnly, "toJSON">;
export const useRect = (element?: HTMLDivElement | null) => {
  const [rect, setRect] = useState<Rect>(ZERO);

  useEffect(() => {
    if (!element) return;

    setRect(element.getBoundingClientRect());

    const resizeObserver = new ResizeObserver((entries) => {
      const newRect = entries[0].contentRect;
      if (!deepEqual(rect, newRect)) setRect(newRect);
    });

    resizeObserver.observe(element);
    return () => resizeObserver.unobserve(element);
  }, [element]);

  return rect;
};
