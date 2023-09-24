import { getLapsTime, calculateCountdownTimer, getTimeAsString } from "../utils/commonService";
import { DEFAULT_TIME } from "../utils/constant";

describe("commonService", () => {

    it("should return the string for time", () => {
        const time = getTimeAsString(DEFAULT_TIME);
        expect(time).toBe(`00:00:00`)
    });

    it("time should decrease", () => {
        const newTime = calculateCountdownTimer(DEFAULT_TIME);
        expect(newTime).toStrictEqual({ hours: -1, minutes: 59, seconds: 59 });
    });

    it("should retrun the lap time", () => {
        const newTime = getLapsTime(DEFAULT_TIME);
        expect(newTime).toStrictEqual({ hours: 0, minutes: 0, seconds: 1 });
    });
});