import { sessions } from '../sessions.jsx';
import { getUsers } from '../api/index.jsx';
import { ROLE } from '../roles-server/index.jsx';

export const fetchUsers = async (userSession) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}
	const users = await getUsers();
	return {
		error: null,
		res: users,
	};
};
