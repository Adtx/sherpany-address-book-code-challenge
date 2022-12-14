import axios from "axios"
import { User } from "./types"

export const RANDOM_USER_API_BASE_URL = "https://randomuser.me/api/"
const USER_BATCH_SIZE = "50"
const RANDOM_USER_API_PAGINATION_SEED = "abc"
const REQUIRED_USER_FIELDS =
  "id,picture,name,login,email,location,phone,cell,location"

export const fetchUsers = async (
  nationalities?: String[],
  resultsPage: number = 0,
  delayInMilliseconds: number = 0
): Promise<User[] | undefined> => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const urlParams = {
        page: resultsPage + "",
        results: USER_BATCH_SIZE,
        seed: RANDOM_USER_API_PAGINATION_SEED,
        inc: REQUIRED_USER_FIELDS,
        nat: nationalities?.join() || "",
      }

      const apiQueryString = new URLSearchParams(urlParams).toString()

      try {
        const { data } = await axios.get(
          `${RANDOM_USER_API_BASE_URL}?${apiQueryString}`
        )
        const { results: users } = data
        resolve(users)
      } catch (error) {
        console.error(error)
        reject(error)
      }
    }, delayInMilliseconds)
  })
}
