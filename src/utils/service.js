import axios from "axios"

const USER_URL = `${import.meta.env.VITE_APP_API_URL}/userId`

export const getUser = async () => {
  try {
    const response = await axios.get(USER_URL)
    return response.data
  } catch (error) {
    console.error(error)
  }
}