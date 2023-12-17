import { useEffect, useState } from "react";

export default function useScroll(ref) {
  const [scroll, setScroll] = useState(null); // for scrolling

  const scrollListToEnd = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
    setScroll(false);
  };

  useEffect(() => {
    scroll && scrollListToEnd();
  });

  return { setScroll };
}
