import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import postsSlice from './slices/postsSlice'
import postPageSlice from './slices/postPageSlice'

export const store = configureStore({
    reducer: {
        postsSlice,
        postPageSlice,
    },
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export default store