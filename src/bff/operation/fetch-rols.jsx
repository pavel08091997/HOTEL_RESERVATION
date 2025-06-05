import { sessions } from '../sessions.jsx';
import { getRols } from '../api/index.jsx';
import { ROLE } from '../roles-server/index.jsx';

export const fetchRols = async (userSession) => {
	const accessRoles = [ROLE.ADMIN];
	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Ошибка доступа',
			res: null,
		};
	}
	const role = await getRols();
	return {
		error: null,
		res: role,
	};
};
