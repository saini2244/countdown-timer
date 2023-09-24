import React from 'react';
import { START } from '../utils/constant';
import '../assets/css/input-time-picker.scss'

export const InputTimePicker = ({ status, time, setTime }) => {

    const onChange = (event) => {
        const { value, id } = event.target;
        try {
            const re = /^[0-9\b]+$/;
            if ((value === '' || re.test(value)) && value.length <= 2) {
                setTime({ ...time, [id]: value })
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container">
            <div className="labels">
                <span className="input-label">Hours</span>
                <span className="input-label">Minutes</span>
                <span className="input-label">Seconds</span>
            </div>
            <div className='inputs'>
                <input id="hours" className='custom-input' disabled={status !== START} type="number" value={time.hours} min="0" max="9" step="1" onChange={onChange} />
                <p className="colon">:</p>
                <input id="minutes" className='custom-input' disabled={status !== START} type="number" value={time.minutes} min="0" max="9" step="1" onChange={onChange} />
                <p className="colon">:</p>
                <input id="seconds" className='custom-input' disabled={status !== START} data-testid="testid-seconds" type="number" value={time.seconds} min="0" max="9" step="1" onChange={onChange} />
            </div>
        </div>
    );
};
