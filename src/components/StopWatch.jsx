import React, { useState } from 'react';
import { TimePicker } from './TimePicker';
import { Button } from './Button';
import { useStopWatch } from '../customHooks/useStopWatch';
import { Laps } from './Laps';
import '../assets/css/timer.scss'
import { DEFAULT_TIME, PAUSE, RUNNING, START, STOP } from '../utils/constant';
import { getStopWatchTime } from '../utils/commonService';

export const StopWatch = () => {
  const [time, setTime] = useState(DEFAULT_TIME);
  const { stopWatchTimer, status, laps, start, stop, pause, resume, lap, reset } = useStopWatch();

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
  }]

  return (
    <div className='timer-container'>
      <div className='button-container'>
        <h1>Stop Watch</h1>
        <TimePicker time={time} setTime={setTime} />
        <div className='stop-watch-timer'>
          <span>{getStopWatchTime(stopWatchTimer)}</span>
        </div>
        {
          buttons.map(button => (
            button.enabledStatus.includes(status) &&
            <Button key={button.name} name={button.name} customClass={button.customClass} clickhandler={() => button.clickhandler(time)} />
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
