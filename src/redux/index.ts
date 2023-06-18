import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app/appReducer'
import mainPageReducer from './mainPage/mainPageReducer'

const store = configureStore({
    reducer: {
        app: appReducer,
        main: mainPageReducer
    },
    devTools: true
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunkOptions = {
    state: AppState
    dispatch: AppDispatch
}

export default store