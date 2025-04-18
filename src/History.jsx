import moment from 'moment';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { secondsToTime } from './utils/utils';

const History = () => {
    const { history } = useSelector(state => state.history);
    const data = useMemo(() => {
        let data = history.slice(-4)
        Array.from({ length: 4 - history.length }).forEach(item => {
            data.push(({ speed: 0, }))
        })
        return data;
    }, [history])

    const CustomTooltip = ({ payload, label }) => {
        return (payload && payload.length > 0 && payload[0].payload.accuracy) ?
            (
                <div className="custom_tooltip">
                    <div><h3>Accuracy: </h3>{Math.floor(payload[0].payload.accuracy)}%</div>
                    <div><h3>Speed: </h3>{label} WPM</div>
                    <div><h3>Correct Words: </h3>{payload[0].payload.correctWords}</div>
                    <div><h3>Total Words Written: </h3>{payload[0].payload.totalWordsWritten}</div>
                    <div><h3>Time: </h3>{moment(payload[0].payload.date).fromNow()}</div>
                    <div><h3>Level: </h3>{payload[0].payload.level}</div>
                    <div><h3>Duration: </h3>{secondsToTime(payload[0].payload.duration).m} Min {secondsToTime(payload[0].payload.duration).s > 0 && <>{secondsToTime(payload[0].payload.duration).s} Sec</>}</div>
                </div>
            )
            :
            null
    }

    return (
        <div className='history_page'>
            <div className="history_box">
                <h2>History</h2>
                <div className="graph">
                    {
                        history.length > 0 ?
                            <BarChart width={600} height={500} data={data}>
                                <defs>
                                    <linearGradient id="bgGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="65%" stopColor="rgb(32, 34, 40)" />
                                        <stop offset="100%" stopColor="rgb(18, 18, 18)" />
                                        <stop offset="0%" stopColor="rgb(89, 95, 108)" />
                                    </linearGradient>
                                </defs>
                                <YAxis />
                                <XAxis dataKey="speed" />
                                <Tooltip content={<CustomTooltip />} />
                                {/* <Legend /> */}
                                <Bar dataKey="speed" fill="#8884d8" />
                            </BarChart>
                            :
                            <p>No history found</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default History