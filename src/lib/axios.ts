import axios, { AxiosError } from 'axios'
import { SessionIdName, getItem, removeItem } from './local-storage'
import { redirect } from '@tanstack/react-router'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

instance.interceptors.request.use(
  (config) => {
    const sessionId = getItem(SessionIdName)

    if (sessionId) {
      config.headers.Authorization = `Bearer ${sessionId}`
    }

    return config
  },
  (error) => {
    throw error
  }
)

instance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const url = error.config?.url
    if (error?.response?.status === 401) {
      removeItem(SessionIdName)

      throw redirect({
        to: '/sign-in',
        search: { redirect: url }
      })
    }
    return Promise.reject(error)
  }
)

export default instance
