import { DEFAULT_TIME } from "./constant";

const padStart = (str, defaultPad = 2) => {
    return str.toString().padStart(defaultPad, '0');
}

export const getTimeAsString = (time) => {
    const { hours, minutes, seconds } = time || DEFAULT_TIME;
    return `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}`;
}

export const calculateCountdownTimer = (time = DEFAULT_TIME) => {
    const newTime = { ...time };
    const { minutes, seconds } = newTime;
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

export const getLapsTime = (time = DEFAULT_TIME) => {
    const newTime = { ...time };
    const { minutes, seconds } = newTime;
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