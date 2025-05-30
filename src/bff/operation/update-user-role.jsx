import { setUserRole } from '../api/set-user-role';
import { sessions } from '../sessions';
import { ROLE } from '../../roles';

export const updateUserRole = async (userId, newUserRoleId, userSession) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}
	setUserRole(userId, newUserRoleId);

	return {
		error: null,
		res: true,
	};
};
