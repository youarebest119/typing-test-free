"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LEVELS, ROUTES } from "./utils/constants"

const Homepage = () => {
  const navigate = useNavigate()
  const options = [
    { value: 10, label: "10 Seconds" },
    { value: 60, label: "1 Minute" },
    { value: 120, label: "2 Minutes" },
    { value: 300, label: "5 Minutes" },
  ]
  const levels = [
    { value: LEVELS.EASY, label: "Easy" },
    { value: LEVELS.MEDIUM, label: "Medium" },
    { value: LEVELS.HARD, label: "Hard" },
  ]
  const [duration, setDuration] = useState(60)
  const [level, setLevel] = useState(LEVELS.MEDIUM)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(ROUTES.TEST.replace(":level", level).replace(":duration", duration))
  }

  return (
    <div className="homepage">
      <div className="custom_card">
        <h2>Speed Typing Test</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-text-muted">Test Duration</label>
            <select onChange={(e) => setDuration(e.target.value)} defaultValue={duration} className="mb-4">
              <option disabled>Select Duration</option>
              {options.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-text-muted">Difficulty Level</label>
            <select onChange={(e) => setLevel(e.target.value)} defaultValue={level} className="mb-4">
              <option disabled>Select Level</option>
              {levels.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="mt-4 w-100 custom_btn">
            Start Test
          </button>
        </form>
      </div>
    </div>
  )
}

export default Homepage
