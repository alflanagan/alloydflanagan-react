import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VIEW_BLOG_TAG } from '../actions/types'

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

export interface BlogState {
  showBlog: boolean
  currentPost?: string
}

const initialState: BlogState = {
  showBlog: false
}

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    view: (state, action: PayloadAction<string, string>) => {
      if (action.type === VIEW_BLOG_TAG) {
        return {
          ...state,
          showBlog: true,
          currentPost: action.payload
        }
      } else {
        return state
      }
    }
  }
})

export default blogSlice
