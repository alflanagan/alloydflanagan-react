import {
  VIEW_BLOG_LIST,
  VIEW_BLOG,
  CREATE_BLOG,
  DELETE_BLOG,
  UPDATE_BLOG
} from './types'
import history from '../../history'
import blogs from '../apis/blogs_api'

export const viewBlog = (blogId) => {
  return {
    type: VIEW_BLOG,
    payload: blogId
  }
}

export const createBlog = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth
  const response = await blogs.post('/blogs/', { ...formValues, userId })

  dispatch({ type: CREATE_BLOG, payload: response.data })
  history.push('/')
}

export const viewBlogList = () => {
  return {
    type: VIEW_BLOG_LIST
  }
}

export const updateBlog = (blogId, formValues) => async (dispatch, getState) => {
  const response = await blogs.patch(`/blogs/${blogId}`, formValues)

  dispatch({
    type: UPDATE_BLOG,
    payload: response.data
  })
  history.push('/')
}

export const deleteBlog = blogId => async dispatch => {
  await blogs.delete(`/blogs/${blogId}`)
  dispatch({
    type: DELETE_BLOG,
    payload: blogId
  })
  history.push('/')
}
