import {
  VIEW_BLOG_LIST_TAG,
  DELETE_BLOG_TAG,
  UPDATE_BLOG_TAG,
  VIEW_BLOG_TAG,
  CREATE_BLOG_TAG,
  SHOW_TAB_TAG,
} from './types'
import history from '../../history'
import blogs from '../apis/blogs_api'
import { Action, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store'
import { AxiosResponse } from 'axios'
import { TabTypes } from '../components/Tabs'

export const viewBlog = (blogId: string): PayloadAction<string> => {
  return {
    type: VIEW_BLOG_TAG,
    payload: blogId,
  }
}

export const createBlog =
  (formValues: FormData) =>
    async (dispatch: Dispatch, getState: () => RootState) => {
    // TODO: Implement users/authorization
    // const { userId } = getState().auth
      const response: AxiosResponse<unknown, unknown> = await blogs.post(
        '/blogs/',
        { ...formValues /* , userId */ }
      )

      dispatch({ type: CREATE_BLOG_TAG, payload: response.data })
      history.push('/')
    }

export const viewBlogList = (): Action => {
  return {
    type: VIEW_BLOG_LIST_TAG,
  }
}

export const updateBlog =
  (blogId: string, formValues: unknown) => async (dispatch: AppDispatch) => {
    const response: AxiosResponse<JSON, unknown> = await blogs.patch(
      `/blogs/${blogId}`,
      formValues
    )

    dispatch({
      type: UPDATE_BLOG_TAG,
      payload: response.data,
    })
  }

export const deleteBlog = (blogId: string) => async (dispatch: AppDispatch) => {
  await blogs.delete(`/blogs/${blogId}`)
  dispatch({
    type: DELETE_BLOG_TAG,
    payload: blogId,
  })
  history.push('/')
}

export const showTab = (tab: TabTypes) => async (dispatch: AppDispatch) => {
  dispatch({
    type: SHOW_TAB_TAG,
    payload: tab,
  })
}
