"use client";

import { useMemo } from "react";

export default function MeetupCalendar() {
  const { sundays, monthName, year, today, firstDayOfWeek, daysInMonth } = useMemo(() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    const firstDay = new Date(y, m, 1);
    const lastDay = new Date(y, m + 1, 0);
    const suns: number[] = [];

    for (let d = 1; d <= lastDay.getDate(); d++) {
      const date = new Date(y, m, d);
      if (date.getDay() === 0) suns.push(d);
    }

    const monthNames = [
      "Януари", "Февруари", "Март", "Април", "Май", "Юни",
      "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември",
    ];

    return {
      sundays: suns,
      monthName: monthNames[m],
      year: y,
      today: now.getDate(),
      firstDayOfWeek: firstDay.getDay(),
      daysInMonth: lastDay.getDate(),
    };
  }, []);

  // Adjust so Monday = 0
  const startOffset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  const days: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  const nextSunday = sundays.find((s) => s >= today) || sundays[0];

  return (
    <div className="bg-white rounded-2xl p-5 border border-green-soft/15 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading font-bold text-green-primary">
          {monthName} {year}
        </h3>
        <span className="text-xs bg-green-primary/10 text-green-primary px-3 py-1 rounded-full font-medium">
          Следваща: {nextSunday} {monthName}
        </span>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"].map((d) => (
          <div key={d} className="font-medium text-text-dark/40 py-1">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {days.map((day, i) => {
          if (day === null) return <div key={`empty-${i}`} />;
          const isSunday = sundays.includes(day);
          const isToday = day === today;
          const isPast = day < today;

          return (
            <div
              key={day}
              className={`py-1.5 rounded-lg transition-all ${
                isSunday && isToday
                  ? "bg-green-primary text-white font-bold ring-2 ring-green-primary/30"
                  : isSunday
                  ? isPast
                    ? "bg-green-soft/20 text-green-primary/50"
                    : "bg-green-primary/10 text-green-primary font-semibold"
                  : isToday
                  ? "bg-earth/10 text-earth font-semibold"
                  : isPast
                  ? "text-text-dark/30"
                  : "text-text-dark/70"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-3 text-xs text-text-dark/50">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-green-primary/10" />
          <span>Неделя (събиране)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-earth/10" />
          <span>Днес</span>
        </div>
      </div>
    </div>
  );
}
