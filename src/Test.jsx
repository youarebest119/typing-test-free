"use client"

import { Fragment, useMemo, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useTimer } from "react-timer-hook"
import sound from "./assets/sounds/keyboard-click.mp3"
import { addHistory } from "./store/slices/history.slice"
import { ROUTES } from "./utils/constants"
import { typingTestParagraphs } from "./utils/paragraphs"

const Test = () => {
  const click = useRef(null)
  const { level, duration } = useParams()
  const firstTime = useRef(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const para = useMemo(() => {
    const randomNumber = Math.floor(Math.random() * 10)
    const items = typingTestParagraphs[level]
    if (items) {
      return items[randomNumber].text
    }
  }, [level])

  const [text, setText] = useState("")
  const [value, setValue] = useState([])
  const [loading, setLoading] = useState(false)

  const time = useMemo(() => {
    const time = new Date()
    time.setSeconds(time.getSeconds() + Number(duration))
    return time
  }, [duration])

  const handleExpired = () => {
    setLoading(true)
    const finalWordsWritten = value.slice(0, value.length - 1).map((item) => item.word)
    const lengthOfParaReached = para.split(" ").slice(0, value.length - 1)

    let correctWords = 0
    for (let i = 0; i < finalWordsWritten.length; i++) {
      if (finalWordsWritten[i] === lengthOfParaReached[i]) {
        correctWords++
      }
    }

    setTimeout(() => {
      navigate(ROUTES.RESULT, {
        state: {
          accuracy: (correctWords / finalWordsWritten.length) * 100,
          speed: correctWords / (Number(duration) / 60),
          correctWords: correctWords,
          totalWordsWritten: finalWordsWritten.length,
          finalWordsWritten: value.slice(0, value.length - 1),
          lengthOfParaReached,
          duration,
          level,
        },
      })
      dispatch(
        addHistory({
          accuracy: (correctWords / finalWordsWritten.length) * 100,
          speed: correctWords / (Number(duration) / 60),
          correctWords: correctWords,
          totalWordsWritten: finalWordsWritten.length,
          userWords: value.slice(0, value.length - 1),
          accurateWords: lengthOfParaReached,
          date: new Date().getTime(),
          duration,
          level,
        }),
      )
    }, 1000)
  }

  const { seconds, minutes, start } = useTimer({ expiryTimestamp: time, autoStart: false, onExpire: handleExpired })

  const handleChange = (e) => {
    if (click.current) {
      click.current.play()
    }
    if (firstTime.current && e.target.value.length === 1) {
      firstTime.current = false
      start()
    }
    setText(e.target.value)
    const txtArr = e.target.value.split(" ")
    const output = txtArr.map((item, index) => ({ word: item, isCorrect: para.split(" ")[index] === item }))
    setValue(() => output)
  }

  const handleRestart = () => {
    window.location.reload()
  }

  if (!para) {
    return (
      <div className="test_design">
        <div className="test_box">
          <div className="text-white text-center">Level not found</div>
          <button type="button" onClick={() => navigate(ROUTES.HOMEPAGE)} className="custom_btn mt-5 mx-auto">
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <audio src={sound} ref={click} />
      {loading ? (
        <div className="test_design">
          <div className="test_box text-center">
            <div className="spinner"></div>
          </div>
        </div>
      ) : (
        <div className="test_design">
          <div className="test_box">
            <div className="header">
              <button onClick={handleRestart} title="restart" type="button" className="restart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
              </button>
              |
              <div className="level" title="Level">
                &nbsp;{level?.toLowerCase()}
              </div>
            </div>
            <div className="timer_box">
              <h1>Timer</h1>
              <h2>
                <span>
                  {minutes < 10 && "0"}
                  {minutes}
                </span>
                :
                <span>
                  {seconds < 10 && "0"}
                  {seconds}
                </span>
              </h2>
            </div>
            <p>
              {para.split(" ").map((item, index) => {
                const isCurrent = index === value.length - 1
                const isDanger = !value[index]?.isCorrect && index < value.length
                return (
                  <Fragment key={index}>
                    <span className={isCurrent ? "highlight" : isDanger ? "danger" : ""}>{item}</span>
                    &nbsp;
                  </Fragment>
                )
              })}
            </p>
            <textarea
              autoFocus
              className="w-100"
              onChange={handleChange}
              value={text}
              placeholder="Start typing here..."
            />
          </div>
          <div className="note_txt">
            <p>
              <span>Note:</span> The last word you type will not be counted unless you press the spacebar after it. Your
              typing speed is calculated based on the number of correctly typed words divided by the total time in
              seconds. Accuracy is determined by the number of correct words divided by the total words you typed.
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Test
