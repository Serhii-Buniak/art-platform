import { EffectCallback, useEffect } from "react"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppState } from "."


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export const useFetchEffect = (effect: EffectCallback) => {

    useEffect(() => {
        effect()
    }, [])
}