import { useCallback, useEffect, useRef, useState } from "react";
import { getLapsTime, calculateCountdownTimer, getTimeAsString, getTime } from "../utils/commonService";
import { DEFAULT_TIME, PAUSE, RUNNING, START, STOP } from "../utils/constant";

export const useCountdownTimer = () => {

    const [countdownTimer, setCountdownTimer] = useState(null);
    const [lapTimer, setLapTimer] = useState(DEFAULT_TIME);
    const [status, setStatus] = useState(START);
    const [laps, setLaps] = useState({});
    const interval = useRef(null);

    const timer = useCallback(() => {
        clearTimerInterval();
        interval.current = setInterval(() => {
            setCountdownTimer((prev) => {
                return calculateCountdownTimer(prev);
            });
            setLapTimer((prev) => {
                return getLapsTime(prev);
            })
        }, 1000);
    }, [])

    const clearTimerInterval = () => {
        if (interval.current) {
            clearInterval(interval.current);
            interval.current = undefined;
        }
    }

    useEffect(() => {
        if (countdownTimer && status === RUNNING) {
            timer(countdownTimer)
        }

        return () => {
            clearTimerInterval();
        }
    }, [countdownTimer, status, timer])

    const start = (time) => {
        setStatus(RUNNING);
        const newTime = getTime(time);
        setCountdownTimer(newTime);
    }

    const stop = () => {
        lap();
        setStatus(STOP);
        setLapTimer(DEFAULT_TIME);
        clearTimerInterval();
    }

    const pause = () => {
        setStatus(PAUSE);
        clearTimerInterval();
    }

    const resume = () => {
        setStatus(RUNNING);
    }

    const reset = () => {
        setStatus(START);
        setLapTimer(DEFAULT_TIME);
        setCountdownTimer(DEFAULT_TIME);
        setLaps({});
        clearTimerInterval();
    };

    const lap = () => {
        const lapEndTime = getTimeAsString(countdownTimer);
        const lapTime = getTimeAsString(lapTimer);
        setLaps({ ...laps, [lapEndTime]: lapTime });
        setLapTimer(DEFAULT_TIME);
    }

    return { countdownTimer, lapTimer, status, laps, start, stop, pause, resume, lap, reset };
}