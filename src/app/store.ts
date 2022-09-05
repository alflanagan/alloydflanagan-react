import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {}
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
