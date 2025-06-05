import { ACTION_TYPE } from './action-type.jsx';
import { server } from '../bff/server.jsx';


export const logout = (session) => {
	server.logout(session)
	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
