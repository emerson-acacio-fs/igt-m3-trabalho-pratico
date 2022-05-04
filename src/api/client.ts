import axios from "axios"

export const client = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3001",
  validateStatus: (status) => {
    if (status === 401) {
      document.location.reload()
    }
    return true
  },
})

export const loginClient = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3001",
})
