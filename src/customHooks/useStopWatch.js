import { useEffect, useRef, useState } from "react";
import { getLapTime, getNextStopTime, getStopWatchTime, padStart } from "../utils/commonService";
import { DEFAULT_TIME, PAUSE, RUNNING, START, STOP } from "../utils/constant";

export const useStopWatch = () => {

    const [stopWatchTimer, setStopWatchTimer] = useState(null);
    const [status, setStatus] = useState(START);
    const [startTime, setStartTime] = useState(DEFAULT_TIME);
    const [laps, setLaps] = useState({});
    const interval = useRef(null);

    const timer = () => {
        clearTimerInterval();
        interval.current = setInterval(() => {
            setStopWatchTimer((prev) => {
                return getNextStopTime(prev);
            });
            setStartTime((prev) => {
                return getLapTime(prev);
            })
        }, 1000);
    }

    const clearTimerInterval = () => {
        if (interval.current) {
            clearInterval(interval.current);
            interval.current = undefined;
        }
    }

    useEffect(() => {
        if (stopWatchTimer && status === RUNNING) {
            timer(stopWatchTimer)
        }
    }, [stopWatchTimer, status])

    const start = (time) => {
        setStatus(RUNNING);
        setStopWatchTimer(time);
    }

    const stop = () => {
        lap();
        setStatus(STOP);
        setStartTime(DEFAULT_TIME);
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
        setStartTime(DEFAULT_TIME);
        setStopWatchTimer(DEFAULT_TIME);
        setLaps({});
        clearTimerInterval();
    };

    const lap = () => {
        const lapEndTime = getStopWatchTime(stopWatchTimer);
        const lapTime = getStopWatchTime(startTime);
        setLaps({ ...laps, [lapEndTime]: lapTime });
        setStartTime(DEFAULT_TIME);
    }

    return { stopWatchTimer, status, laps, start, stop, pause, resume, lap, reset };
}