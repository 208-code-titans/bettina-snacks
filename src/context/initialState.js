import { fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser()

// Define all the initial states of the user
export const initialState = {
    // Check local storage for login data, if none, set to null
    user: userInfo,
    
}