import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { historySlice } from "./slices/history.slice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/es/storage"
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineSlices({
    history: historySlice.reducer,
})

const persistedReducer = persistReducer({ key: "root", storage, version: 1, }, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

const persistedStore = persistStore(store);

export default store;