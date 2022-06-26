import axios from "axios"

const USER_URL = `${import.meta.env.VITE_APP_API_URL}/userId`
const CREATE_ITEM = (userId) => `${import.meta.env.VITE_APP_API_URL}/todo/${userId}`

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