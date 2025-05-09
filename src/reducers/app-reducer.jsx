import { ACTION_TYPE } from '../actions/action-type';

const intialAppState = {
	waslogout: false
};

export const appReducer = (state = intialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				waslogout: !state.waslogout,
			};
		default:
			return state;
	}
};
