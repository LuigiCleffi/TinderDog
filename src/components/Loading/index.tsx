import { useState, useEffect } from "react";

const Loading = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) {
          return ".";
        }
        return prevDots + ".";
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <div className="text-3xl">Loading{dots}</div>
    </div>
  );
};

export default Loading;