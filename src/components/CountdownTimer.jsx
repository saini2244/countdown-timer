import React, { useState } from 'react';
import { InputTimePicker } from './InputTimePicker';
import { Button } from './Button';
import { useCountdownTimer } from '../customHooks/useCountdownTimer';
import { Laps } from './Laps';
import { DEFAULT_TIME, PAUSE, RUNNING, START, STOP } from '../utils/constant';
import { getTimeAsString } from '../utils/commonService';
import '../assets/css/countdown-timer.scss'

export const CountdownTimer = () => {
  const [time, setTime] = useState(DEFAULT_TIME);
  const { countdownTimer, lapTimer, status, laps, start, stop, pause, resume, lap, reset } = useCountdownTimer();

  const buttons = [{
    name: "Start",
    enabledStatus: [START],
    clickhandler: start,
    customClass: "start-button",
  },
  {
    name: "Stop",
    enabledStatus: [RUNNING],
    clickhandler: stop,
    customClass: "stop-button"
  },
  {
    name: "Pause",
    enabledStatus: [RUNNING],
    clickhandler: pause,
    customClass: "pause-button"
  },
  {
    name: "Resume",
    enabledStatus: [PAUSE],
    clickhandler: resume,
    customClass: "resume-button"
  },
  {
    name: "Reset",
    enabledStatus: [STOP],
    clickhandler: reset,
    customClass: "reset-button"
  },
  {
    name: "Laps",
    enabledStatus: [RUNNING],
    clickhandler: lap,
    customClass: "lap-button"
  }];

  const clickhandler = (button, time) => {
    button.clickhandler(time)
    if (button.name === 'Reset') {
      setTime(DEFAULT_TIME);
    }
  }

  return (
    <div className='countdown-timer-container' data-testid="testid-countdown-timer-container">
      <div className='button-container'>
        <InputTimePicker status={status} time={time} setTime={setTime} />
        <div className='countdown-timer-timer'>
          <span>{getTimeAsString(countdownTimer)}</span>
        </div>
        {status !== START &&
          <div className='lap-time'>
            Current Laps time: <span>{getTimeAsString(lapTimer)}</span>
          </div>
        }
        {
          buttons.map(button => (
            button.enabledStatus.includes(status) &&
            <Button key={button.name} name={button.name} customClass={button.customClass} clickhandler={() => clickhandler(button, time)} />
          ))
        }
      </div>
      <div className='laps-container'>
        {
          status === STOP &&
          <Laps laps={laps} />
        }
      </div>
    </div>
  );
};
