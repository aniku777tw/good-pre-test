import { useLayoutEffect, useRef } from "react";

export default function useCursorFocus(numberStr) {
  const inputRef = useRef(null);
  const focused = useRef(null);
  useLayoutEffect(() => {
    if (!focused.current) {
      return;
    }
    const [prevText, cursor] = focused.current;
    const prevCommaCount = prevText.split(",").length - 1;
    const currentCommaCount = numberStr.split(",").length - 1;
    const offset = currentCommaCount - prevCommaCount;
    const curr = cursor + offset;
    const pos = curr < 0 ? 0 : curr;
    inputRef.current.setSelectionRange(pos, pos);
  }, [numberStr]);

  return {inputRef,focused}
}
