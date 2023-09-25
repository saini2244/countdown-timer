import { DEFAULT_TIME } from "./constant";

export const padStart = (time) => {
    const timeWith2Digit = Math.abs(time).toString().padStart(2, '0');
    if (time < 0) {
        return `-${timeWith2Digit}`;
    }
    return timeWith2Digit;
}

export const getTimeAsString = (time, isPositive = true) => {
    const { hours, minutes, seconds } = time || DEFAULT_TIME;
    return `${isPositive ? "" : "-"}${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}`;
}

export const calculateCountdownTimer = (time = DEFAULT_TIME) => {
    let { hours, minutes, seconds } = time || {};
    if (seconds > 0) {
        seconds -= 1;
    } else if (minutes > 0) {
        minutes -= 1;
        seconds = 59;
    } else {
        seconds = 59;
        minutes = 59;
        hours -= 1;
    }
    return { hours, minutes, seconds };
}

export const getLapsTime = (time = DEFAULT_TIME) => {
    let { hours, minutes, seconds } = time;
    if (seconds < 59) {
        seconds += 1;
    } else if (minutes < 59) {
        minutes += 1;
        seconds = 0;
    } else {
        seconds = 0;
        minutes = 0;
        hours += 1;
    }
    return { hours, minutes, seconds };
}

export const getTime = (time) => {
    let { hours, minutes, seconds } = time;
    if (seconds > 60) {
        minutes++;
        seconds = parseInt(seconds) - 59;
    }
    if (minutes > 60) {
        hours++;
        minutes = parseInt(minutes) - 60;
    }
    minutes = minutes > 60 ? 60 : minutes;
    return { hours, minutes, seconds };
}