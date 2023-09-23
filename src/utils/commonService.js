import { DEFAULT_TIME } from "./constant";

const padStart = (str, defaultPad = 2) => {
    return str.toString().padStart(defaultPad, '0');
}

export const getStopWatchTime = (time) => {
    const { hours, minutes, seconds } = time || DEFAULT_TIME;
    return `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}`;
}

export const getNextStopTime = (time) => {
    const newTime = { ...time };
    const { hours, minutes, seconds } = newTime;
    if (seconds > 0) {
        newTime.seconds -= 1;
    } else if (minutes > 0) {
        newTime.minutes -= 1;
        newTime.seconds = 59;
    } else {
        newTime.seconds = 59;
        newTime.minutes = 59;
        newTime.hours -= 1;
    }
    return newTime
}

export const getLapTime = (time) => {
    const newTime = { ...time };
    const { hours, minutes, seconds } = newTime;
    if (seconds < 59) {
        newTime.seconds += 1;
    } else if (minutes < 59) {
        newTime.minutes += 1;
        newTime.seconds = 0;
    } else {
        newTime.seconds = 0;
        newTime.minutes = 0;
        newTime.hours += 1;
    }
    return newTime
}