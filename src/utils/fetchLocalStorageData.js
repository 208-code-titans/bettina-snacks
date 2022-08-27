export const fetchUser = () => {
	// store user info in userInfo if user is not undefined
	const userInfo =
		localStorage.getItem('user') !== 'undefined'
			? JSON.parse(localStorage.getItem("user"))
            : localStorage.clear()
    
    return userInfo
}

export const fetchCart = () => {
	const cartInfo =
		localStorage.getItem('cartItems') !== 'undefined'
			? JSON.parse(localStorage.getItem("cartItems"))
            : localStorage.clear()
    
    return cartInfo.length > 0 ? cartInfo : []
}