import React from 'react';
import '../assets/css/picker.scss'

export const TimePicker = ({ time, setTime }) => {

    const onChange = (event) => {
        const { value, id } = event.target;
        try {
            const re = /^[0-9\b]+$/;
            if ((value === '' || re.test(value) && value.length <= 2)) {
                setTime({ ...time, [id]: value })
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="row">
            <input id="hours" type="number" value={time.hours} min="0" max="9" step="1" aria-label="first digit" onChange={onChange} />
            <input id="minutes" type="number" value={time.minutes} min="0" max="9" step="1" aria-label="second digit" onChange={onChange} />
            <input id="seconds" type="number" value={time.seconds} min="0" max="9" step="1" aria-label="second digit" onChange={onChange} />
        </div>
    );
};
