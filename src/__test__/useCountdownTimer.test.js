import { act, renderHook } from "@testing-library/react";
import { useCountdownTimer } from "../customHooks/useCountdownTimer";
import { DEFAULT_TIME, RUNNING, START, STOP } from "../utils/constant";

describe("useCountdownTimer", () => {
    
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("status should be start", () => {
        const { result } = renderHook(() => useCountdownTimer())
        expect(result.current.status).toBe(START);
    });

    it("status should be running", () => {
        const { result } = renderHook(() => useCountdownTimer())
        act(() => {
            result.current.start(DEFAULT_TIME)
        })

        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(result.current.countdownTimer).toStrictEqual({ hours: -1, minutes: 59, seconds: 59 });
        expect(result.current.status).toBe(RUNNING);

    });
    it("status should be stop", () => {
        const { result } = renderHook(() => useCountdownTimer())
        act(() => {
            result.current.stop()
        })

        expect(result.current.status).toBe(STOP);

    });
    it("status should be start", () => {
        const { result } = renderHook(() => useCountdownTimer())
        act(() => {
            result.current.reset()
        })

        expect(result.current.status).toBe(START);
    });

    it("second should changed from given time", () => {
        const { result } = renderHook(() => useCountdownTimer())
        act(() => {
            result.current.start({hours: 1, minutes: 5, seconds: 50})
        })
        act(() => {
            jest.advanceTimersByTime(1000*50);
        });
        expect(result.current.countdownTimer).toStrictEqual({hours: 1, minutes: 5, seconds: 0});
    });

    it("minute should changed from given time", () => {
        const { result } = renderHook(() => useCountdownTimer())
        act(() => {
            result.current.start({hours: 1, minutes: 5, seconds: 50})
        })
        act(() => {
            jest.advanceTimersByTime(1000*(50*2));
        });
        expect(result.current.countdownTimer).toStrictEqual({hours: 1, minutes: 4, seconds: 10});
    });

    it("hours should changed from given time", () => {
        const { result } = renderHook(() => useCountdownTimer())
        act(() => {
            result.current.start({hours: 1, minutes: 5, seconds: 50})
        })
        act(() => {
            jest.advanceTimersByTime(1000*(50*20));
        });
        expect(result.current.countdownTimer).toStrictEqual({hours: 0, minutes: 49, seconds: 10});
    });
});