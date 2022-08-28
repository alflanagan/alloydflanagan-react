import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch, AppThunk } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useAppDispatch = (): AppThunk<AppDispatch> =>
  useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
