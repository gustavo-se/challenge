import axios from "axios"

const USER_URL = `${import.meta.env.VITE_APP_API_URL}/userId`
const CREATE_ITEM = (userId) => `${import.meta.env.VITE_APP_API_URL}/todo/${userId}`
const COMPLETED_ITEM = (userId) => `${import.meta.env.VITE_APP_API_URL}/todo/${userId}`
const GET_ALL_ITEM = (userId) => `${import.meta.env.VITE_APP_API_URL}/todo/${userId}`
const GET_COMPLETED = (userId, completed) => `${import.meta.env.VITE_APP_API_URL}/todo/${userId}/${completed}`
const DELETE_ITEM = (userId) => `${import.meta.env.VITE_APP_API_URL}/todo/${userId}`

export const getUser = async () => {
  try {
    const response = await axios.get(USER_URL)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createItem = async (userId, data) => {
  try {
    const response = await axios.post(CREATE_ITEM(userId), data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const editItem = async (userId, data) => {
  try {
    const response = await axios.put(COMPLETED_ITEM(userId), data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getAllItem = async (userId) => {
  try {
    const response = await axios.get(GET_ALL_ITEM(userId))
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getIsCompletedItem= async (userId, completed) => {
  try {
    const response = await axios.get(GET_COMPLETED(userId, completed))
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const deleteItem= async (userId, data) => {
  try {
    const response = await axios.delete(DELETE_ITEM(userId), {data})
    return response.data
  } catch (error) {
    console.error(error)
  }
}