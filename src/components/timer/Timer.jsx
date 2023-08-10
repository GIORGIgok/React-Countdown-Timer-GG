import React from "react";

export default function Timer({
  milliseconds,
  seconds,
  minutes,
  hours,
  changeSeconds,
  changeMinutes,
  changeHours,
}) {
  return (
    <div class="parent-time-box">
      <div className="time-box-1">
        <label>hh</label>
        <input value={hours} onChange={changeHours} />
      </div>{" "}
      <div className="time-box-2">
        <label>mm</label>
        <input value={minutes} onChange={changeMinutes} />
      </div>{" "}
      <div className="time-box-3">
        <label>ss</label>
        <input value={seconds} onChange={changeSeconds} />
      </div>{" "}
      <div className="time-box-4">
        <label>ms</label>
        <input value={milliseconds} />
      </div>{" "}
    </div>
  );
}
