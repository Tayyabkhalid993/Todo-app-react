import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    milliseconds: "00",
    amPm: "AM",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours() % 12 || 12);
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const milliseconds = String(now.getMilliseconds()).padStart(2, "0").slice(0, 2);
      const amPm = now.getHours() >= 12 ? "PM" : "AM";

      setTime({ hours, minutes, seconds, milliseconds, amPm });
    };

    const interval = setInterval(updateTime, 50); // Update time every 50ms
    return () => clearInterval(interval);
  }, []);

   return (
    <div className="bg-white/50 min-h-32 backdrop-blur-md shadow-2xl rounded-xl p-4 font-extralight max-w-[450px]">
      <div className="flex justify-between items-center text-gray-600">
        {/* Header */}
        <div className="absolute top-2 left-4 text-sm font-semibold text-gray-600">
          Clock
        </div>
        <div className="absolute top-2 right-4 text-sm font-semibold text-gray-600">
          {/* ⏲️ */}
        </div>

        {/* Time Display */}
        <div className="flex justify-center items-center w-full h-full mt-4 text-gray-800">
          <div>
          <span className="text-7xl sm:text-9xl font-extralight">{time.hours}</span>
          <span className="text-xl sm:text-4xl font-light self-center pb-3">:{time.minutes}</span>
          <span className="text-xl sm:text-4xl font-light self-end pb-3">:{time.seconds}</span>
          <span className="text-xs sm:text-sm font-light self-end pb-5">:{time.milliseconds}</span>
          <span className="text-7xl sm:text-8xl font-extralight ml-4">{time.amPm}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
