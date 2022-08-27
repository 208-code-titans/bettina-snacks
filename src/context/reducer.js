export const actionType = {
	SET_USER: 'SET_USER',
	SET_CART_SHOW: 'SET_CART_SHOW',
	SET_CART_ITEMS: 'SET_CART_ITEMS'
}

const reducer = (state, action) => {
	// console.log(action)

	switch (action.type) {
		// if the action.type == actionType.SET_USER then return the state
		case actionType.SET_USER:
			return {
				// whatever the state is, return it as is
				...state,
				// update only user info
				user: action.user,
			}
		case actionType.SET_CART_SHOW:
			return {
				// whatever the state is, return it as is
				...state,
				// update only cartshow info
				cartShow: action.cartShow,
			}
		case actionType.SET_CART_ITEMS:
			return {
				// whatever the state is, return it as is
				...state,
				// update only cart items info
				cartItems: action.cartItems,
			}
		default:
			return state
	}
}

export default reducer