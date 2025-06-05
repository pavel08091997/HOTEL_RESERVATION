import { deleteUser } from '../api/delete-user.jsx';
import { sessions } from '../sessions.jsx';
import { ROLE } from '../../roles/index.jsx';

export const removeUser = async (userId, userSession) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		console.log('Проверка доступа:', sessions.access(userSession, accessRoles));
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}
	const deleteUsers = await deleteUser(userId);

	return {
		error: deleteUsers.error,
		res: deleteUsers.res,
	};
};
