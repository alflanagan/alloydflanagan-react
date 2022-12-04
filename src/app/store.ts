import {
  configureStore,
  ThunkAction,
  Action,
  PayloadAction,
} from '@reduxjs/toolkit'
import { SHOW_TAB_TAG } from './actions/types'
import { TabsState, TabTypes } from './components/Tabs'

export interface RootState extends TabsState {}

export const store = configureStore({
  reducer: selectTab,
  preloadedState: {
    showing: TabTypes.Home
  }
})

function selectTab (
  state: RootState | undefined,
  action: PayloadAction
): RootState {
  console.log(
    `selectTab reducer called: state is ${
      state != null ? JSON.stringify(state) : 'undefined'
    }`
  )
  if (state == null) {
    throw new Error("selectTab(): state not defined (shouldn't happen)")
  }
  if (action.payload == null || action.type !== SHOW_TAB_TAG) {
    return state
  }
  return {
    ...state,
    showing: action.payload
  }
}

export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
