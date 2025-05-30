import { sessions } from '../sessions';
import { getRols } from '../api';
import { ROLE } from '../roles-server';

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
