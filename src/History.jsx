"use client"

import { useMemo } from "react"
import { useSelector } from "react-redux"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { secondsToTime, timeSince } from "./utils/utils"
import { Link } from "react-router-dom"
import { ROUTES } from "./utils/constants"

const History = () => {
  const { history } = useSelector((state) => state.history)
  const data = useMemo(() => {
    const data = history.slice(-4)
    Array.from({ length: 4 - history.length }).forEach((item) => {
      data.push({ speed: 0 })
    })
    return data
  }, [history])

  const CustomTooltip = ({ payload, label }) => {
    return payload && payload.length > 0 && payload[0].payload.accuracy ? (
      <div className="custom_tooltip">
        <div>
          <h3>Accuracy:</h3>
          {Math.floor(payload[0].payload.accuracy)}%
        </div>
        <div>
          <h3>Speed:</h3>
          {label} WPM
        </div>
        <div>
          <h3>Correct Words:</h3>
          {payload[0].payload.correctWords}
        </div>
        <div>
          <h3>Total Words Written:</h3>
          {payload[0].payload.totalWordsWritten}
        </div>
        <div>
          <h3>Time:</h3>
          {timeSince(payload[0].payload.date)}
        </div>
        <div>
          <h3>Level:</h3>
          {payload[0].payload.level}
        </div>
        <div>
          <h3>Duration:</h3>
          {secondsToTime(payload[0].payload.duration).m} Min{" "}
          {secondsToTime(payload[0].payload.duration).s > 0 && <>{secondsToTime(payload[0].payload.duration).s} Sec</>}
        </div>
      </div>
    ) : null
  }

  return (
    <div className="history_page">
      <div className="history_box">
        <h2>Your Typing History</h2>
        <div className="graph">
          {history.length > 0 ? (
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={data}>
                <defs>
                  <linearGradient id="bgGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
                <YAxis stroke="#94a3b8" />
                <XAxis dataKey="speed" stroke="#94a3b8" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="speed" fill="url(#bgGradient)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>No history found. Take a typing test to see your results here.</p>
          )}
        </div>
        <Link to={ROUTES.HOMEPAGE} className="custom_btn secondary_btn mt-4 mx-auto">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default History
