import { sessions } from '../sessions.jsx';

export const logout = async (userSession) => {
	sessions.remove(userSession);
};
