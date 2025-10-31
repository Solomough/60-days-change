import React, { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, mins, secs });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 text-white font-bold text-xl">
      <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">Days<br />{time.days}</div>
      <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">Hrs<br />{time.hours}</div>
      <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">Min<br />{time.mins}</div>
      <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">Sec<br />{time.secs}</div>
    </div>
  );
}
