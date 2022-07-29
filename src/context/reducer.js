export const actionType = {
    SET_USER: 'SET_USER'
}

const reducer = (state, action) => {
	console.log(action)

	switch (action.type) {
		// if the action.type == actionType.SET_USER then return the state
		case actionType.SET_USER:
			return {
				// whatever the state is, return it as is
				...state,
				// update only user info
				user: action.user,
			}
		default:
			return state
	}
}

export default reducer