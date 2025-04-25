import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ROUTES } from "./utils/constants"
import Spinner from "./Spinner"
const History = lazy(() => import("./History"))
const Homepage = lazy(() => import("./Homepage"))
const Result = lazy(() => import("./Result"))
const Test = lazy(() => import("./Test"))

const Application = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.HOMEPAGE}
          element={
            <Suspense
              fallback={
                <div className="fallback">
                  <Spinner />
                </div>
              }
            >
              <Homepage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.TEST}
          element={
            <Suspense
              fallback={
                <div className="fallback">
                  <Spinner />
                </div>
              }
            >
              <Test />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.RESULT}
          element={
            <Suspense
              fallback={
                <div className="fallback">
                  <Spinner />
                </div>
              }
            >
              <Result />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.HISTORY}
          element={
            <Suspense
              fallback={
                <div className="fallback">
                  <Spinner />
                </div>
              }
            >
              <History />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Application
