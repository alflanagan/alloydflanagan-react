import {
  VIEW_BLOG_LIST,
  VIEW_BLOG,
  CREATE_BLOG,
  DELETE_BLOG,
  UPDATE_BLOG
} from './types'
import history from '../../history'
import blogs from '../apis/blogs_api'
import { Action, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store'

export const viewBlog = (blogId: string): PayloadAction<string> => {
  return {
    type: VIEW_BLOG,
    payload: blogId
  }
}

export const createBlog =
  (formValues: unknown) =>
    async (dispatch: Dispatch, getState: () => RootState) => {
      const { userId } = getState().auth
      const response = await blogs.post('/blogs/', { ...formValues, userId })

      dispatch({ type: CREATE_BLOG, payload: response.data })
      history.push('/')
    }

export const viewBlogList = (): Action => {
  return {
    type: VIEW_BLOG_LIST
  }
}

export const updateBlog =
  (blogId: string, formValues: unknown) => async (dispatch: AppDispatch) => {
    const response = await blogs.patch(`/blogs/${blogId}`, formValues)

    dispatch({
      type: UPDATE_BLOG,
      payload: response.data
    })
    history.push('/')
  }

export const deleteBlog = (blogId: string) => async (dispatch: AppDispatch) => {
  await blogs.delete(`/blogs/${blogId}`)
  dispatch({
    type: DELETE_BLOG,
    payload: blogId
  })
  history.push('/')
}
