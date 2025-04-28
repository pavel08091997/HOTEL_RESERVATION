import { ACTION_TYPE } from '../actions/action-type';
import { ROLE } from '../roles/roles';

const intialUserState = {
	id: null,
	login: null,
	roleId: ROLE.GUEST,
	session: null,
};

export const userReducer = (state = intialUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: {
			return {
				...state,
				...action.payload,
			};
		}
		case ACTION_TYPE.LOGOUT:
			return intialUserState;
		default:
			return state;
	}
};
