import { createReducer } from '@reduxjs/toolkit'

import { ViewBlogAction, VIEW_BLOG_LIST_TAG } from '../actions/types'
import { RootState } from '../store'

// const blogReducers = (
//   state: RootState = {},
//   action: PayloadAction<Payl>
// ): RootState => {
//   switch (action.type) {
//     case VIEW_BLOG:
//     case UPDATE_BLOG:
//     case CREATE_BLOG:
//       return { ...state, [action.payload.id]: action.payload }
//     case DELETE_BLOG:
//       return _.omit(state, action.payload)
//     case VIEW_BLOG_LIST:
//       return { ...state, ..._.mapKeys(action.payload, 'id') }
//     default:
//       return state
//   }
// }

const initialState: RootState = {}

const blogReducers = createReducer(initialState, (builder) => {
  builder.addCase(
    VIEW_BLOG_LIST_TAG,
    (state: RootState, action: ViewBlogAction): RootState => {
      return {
        ...state,
        // ..._.mapKeys((action as PayloadAction).payload, 'id')
      }
    }
  )
})

export default blogReducers
