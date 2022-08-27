export const fetchUser = () => {
	// store user info in userInfo if user is not undefined
	const userInfo =
		localStorage.getItem('user') !== 'undefined'
			? JSON.parse(localStorage.getItem("user"))
            : localStorage.clear()
    
    return userInfo
}

export const fetchCart = () => {
	// store user info in cartInfo if user is not undefined
	const cartInfo =
		localStorage.getItem('cartItem') !== 'undefined'
			? JSON.parse(localStorage.getItem("cartItems"))
            : localStorage.clear()
    
    return cartInfo ? cartInfo : []
}