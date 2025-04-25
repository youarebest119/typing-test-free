import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  history: [],
}

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action) => {
      state.history = [...state.history, action.payload]
    },
    removeHistory: (state, action) => {
      state.history = state.history.filter((item) => item.id !== action.payload)
    },
    resetHistory: (state) => {
      state.history = []
    },
  },
})
export const { addHistory, removeHistory, resetHistory } = historySlice.actions
