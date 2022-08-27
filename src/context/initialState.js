import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser()
const cartInfo = fetchCart()

// Define all the initial states of state related stuff
export const initialState = {
    // Check local storage for login data, if none, set to null
    user: userInfo,
    cartShow: false,
    cartItems: cartInfo
}