import { Action, PayloadAction } from '@reduxjs/toolkit'

export const VIEW_BLOG_LIST_TAG = 'VIEW_BLOG_LIST'
export const VIEW_BLOG_TAG = 'VIEW_BLOG'
export const CREATE_BLOG_TAG = 'CREATE_BLOG'
export const DELETE_BLOG_TAG = 'DELETE_BLOG'
export const UPDATE_BLOG_TAG = 'UPDATE_BLOG'

export type VIEW_BLOG_LIST = typeof VIEW_BLOG_LIST_TAG
export type VIEW_BLOG = typeof VIEW_BLOG_TAG
export type CREATE_BLOG = typeof CREATE_BLOG_TAG
export type DELETE_BLOG = typeof DELETE_BLOG_TAG
export type UPDATE_BLOG = typeof UPDATE_BLOG_TAG

export interface ViewBlogAction extends Action<VIEW_BLOG_LIST> {
  payload: PayloadAction['payload']
}
