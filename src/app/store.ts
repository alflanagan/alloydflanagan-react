import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

export interface RootState {
  shownContact: boolean
}

export const store = configureStore({
  reducer: toggleContact,
  preloadedState: {
    shownContact: false,
  },
})

function toggleContact (
  state: RootState | undefined,
  action: Action
): RootState {
  if (state == null) {
    return {
      shownContact: true,
    }
  }
  return {
    ...state,
    shownContact: !state.shownContact,
  }
}

export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
