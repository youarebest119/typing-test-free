import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import { LEVELS, ROUTES } from './utils/constants';
import { getSelectValue } from './utils/utils';
import { Resend } from 'resend';
import { template } from './email-temple';

const Homepage = () => {
    const navigate = useNavigate();
    const options = [
        { value: 10, label: "10 Sec" },
        { value: 60, label: "1 Min" },
        { value: 120, label: "2 Min" },
        { value: 300, label: "5 Min" },
    ]
    const levels = [
        { value: LEVELS.EASY, label: "Easy" },
        { value: LEVELS.MEDIUM, label: "Medium" },
        { value: LEVELS.HARD, label: "Hard" },
    ]
    const [duration, setDuration] = useState(60);
    const [level, setLevel] = useState(LEVELS.MEDIUM);
    const handleSubmit = e => {
        e.preventDefault();
        // navigate(ROUTES.TEST.replace(":level", level).replace(":duration", duration))

        const resend = new Resend('re_Eey2qJM4_85gvYaiHNvA2doKqppndjME8');
        (async function () {
            const { data, error } = await resend.emails.send({
                from: 'Acme <lovepreet.singh@antiersolutions.com>',
                to: ['lovepreet.singh@antiersolutions.com'],
                subject: 'Hello World',
                html: template,
            });

            if (error) {
                return console.error({ error });
            }

            console.log({ data });
        })();
    }
    return (
        <div className='homepage'>
            <div className="custom_card">
                <h2 className="mb-5 text-center">Start Typing Test</h2>
                <form onSubmit={handleSubmit}>
                    <Select
                        options={options}
                        value={getSelectValue(options, duration)}
                        name="duration"
                        onChange={option => setDuration(option.value)}
                        placeholder="Select Duration"
                    />
                    <Select
                        options={levels}
                        value={getSelectValue(levels, level)}
                        className='mt-5'
                        name="level"
                        onChange={option => setLevel(option.value)}
                        placeholder="Select level"
                    />
                    <button type="submit" className='mt-5 w-100 custom_btn'>Start</button>
                </form>
            </div>
        </div>
    )
}

export default Homepage