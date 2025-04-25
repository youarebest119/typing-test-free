"use client"

import { lazy } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { ROUTES } from "./utils/constants"
import { secondsToTime } from "./utils/utils"
const WordsWritten = lazy(() => import("./WordsWritten"))

const Result = () => {
  const { state } = useLocation()
  const navigate = useNavigate() // Moved useNavigate here

  if (!state) {
    return (
      <div className="result_page">
        <div className="result_box">
          <h2>No result found</h2>
          <button onClick={() => navigate(ROUTES.HOMEPAGE)} type="button" className="w-100 mt-4 custom_btn">
            Back to Home
          </button>
        </div>
      </div>
    )
  }
  const { accuracy, speed, level, duration, correctWords, totalWordsWritten, finalWordsWritten, lengthOfParaReached } =
    state

  return (
    <div className="result_page">
      <div className="result_box">
        <Link className="see_history" to={ROUTES.HISTORY}>
          See History
        </Link>
        <h2>Typing Test</h2>
        <h1>Your Results</h1>
        <ul>
          <li>
            <h3>Accuracy:</h3>
            {Math.floor(accuracy)}%
          </li>
          <li>
            <h3>Speed:</h3>
            {Math.round(speed)} WPM
          </li>
          <li>
            <h3>Correct Words:</h3>
            {correctWords}
          </li>
          <li>
            <h3>Total Words Written:</h3>
            {totalWordsWritten}
          </li>
          <li>
            <h3>Level:</h3>
            {level}
          </li>
          <li>
            <h3>Duration:</h3>
            {secondsToTime(duration).m} Min {secondsToTime(duration).s > 0 && <>{secondsToTime(duration).s} Sec</>}
          </li>
        </ul>
        <button data-bs-toggle="modal" data-bs-backdrop="false" data-bs-target="#wordsWritten" type="button" className="w-100 mt-4 custom_btn">
          View Your Typed Words
        </button>
        <button onClick={() => navigate(ROUTES.HOMEPAGE)} type="button" className="w-100 mt-4 custom_btn secondary_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="me-2"
            fill="none"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          Try Again
        </button>
      </div>
        <WordsWritten accurateWords={lengthOfParaReached} yourWords={finalWordsWritten} />
        </div>
  )
}

export default Result
