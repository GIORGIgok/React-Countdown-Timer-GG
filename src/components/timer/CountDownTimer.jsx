import React, { useEffect, useState } from "react";
import Timer from "./Timer";

export default function CountDownTimer() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                if (milliseconds > 0) {
                    setMilliseconds((milliseconds) => milliseconds - 1);
                } else if (seconds > 0) {
                    setSeconds((seconds) => seconds - 1);
                    setMilliseconds(99);
                } else if (minutes > 0) {
                    setMinutes((minutes) => minutes - 1);
                    setSeconds(59);
                    setMilliseconds(99);
                } else if (hours > 0) {
                    setHours((hours) => hours - 1);
                    setMinutes(59);
                    setSeconds(59);
                    setMilliseconds(99);
                } else {
                    setIsRunning(false);
                    clearInterval(interval);
                }
            }, 10);
        }
        return () => clearInterval(interval);
    }, [milliseconds, seconds, minutes, hours, isRunning]);

    function startTimer() {
        if (hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0) {
            setIsRunning(true);
        } else {
            window.alert("Add time.");
        }
    }

    function pauseTimer() {
        setIsRunning(false);
    }

    function resetTimer() {
        setIsRunning(false);
        setMilliseconds(0);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    const changeSeconds = (e) => {
        setSeconds(Number(e.target.value));
    };
    const changeMinutes = (e) => {
        setMinutes(Number(e.target.value));
    };
    const changeHours = (e) => {
        setHours(Number(e.target.value));
    };

    return (
        <div class="main-container">
            <h1 className="title">Countdown Timer</h1>
            <Timer
                milliseconds={milliseconds}
                seconds={seconds}
                minutes={minutes}
                hours={hours}
                changeSeconds={changeSeconds}
                changeMinutes={changeMinutes}
                changeHours={changeHours}
            />
            <div class="button-box">
                {!isRunning && (
                    <button className="btn-start" onClick={startTimer}>
                        Start
                    </button>
                )}
                {isRunning && (
                    <button className="btn-pause" onClick={pauseTimer}>
                        Pause
                    </button>
                )}
                <button className="btn-reset" onClick={resetTimer}>
                    Reset
                </button>
            </div>
        </div>
    );
}
