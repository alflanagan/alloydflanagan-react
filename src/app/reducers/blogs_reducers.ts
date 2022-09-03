import _ from 'lodash'

import {
  VIEW_BLOG_LIST,
  VIEW_BLOG,
  CREATE_BLOG,
  DELETE_BLOG,
  UPDATE_BLOG
} from '../actions/types'

const blogReducers = (state = {}, action) => {
  switch (action.type) {
    case VIEW_BLOG:
    case UPDATE_BLOG:
    case CREATE_BLOG:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_BLOG:
      return _.omit(state, action.payload)
    case VIEW_BLOG_LIST:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    default:
      return state
  }
}

export default blogReducers
