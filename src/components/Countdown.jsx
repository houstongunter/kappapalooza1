/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Digits = ({ value, withColon }) => {
  return (
    <div className="flex flex-col items-center last:hidden sm:last:flex">
      <div className="flex">
        {value
          .toString()
          .padStart(2, "0")
          .split("")
          .map((digit, index) => (
            <div
              className="text-lg lg:text-6xl font-bold text-kappa-lightercyan p-2 rounded-lg"
              key={index}
            >
              {digit}
            </div>
          ))}
        {withColon && (
          <div className="text-lg lg:text-6xl font-bold text-kappa-lightercyan p-2 rounded-lg">
            :
          </div>
        )}
      </div>
    </div>
  );
};

const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const date = new Date("June 1, 2024 12:00:00");

  useEffect(() => {
    const updateTime = () => {
      const diff = Math.max(date.getTime() - Date.now(), 0);
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
        minutes: Math.floor(diff / (1000 * 60)) % 60,
        seconds: Math.floor(diff / 1000) % 60,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between gap-0.5 font-paragraph w-full">
      {Object.entries(time).map(([unit, value], index) => (
        <Digits key={index} unit={unit} value={value} withColon={index < 3} />
      ))}
    </div>
  );
};

export default Countdown;
