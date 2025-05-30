import { logout, fetchRols, fetchUsers, authorize, register } from './operation/';
import { updateUserRole } from './operation/update-user-role';

export const server = {
	authorize,
	logout,
	register,
	fetchRols,
	fetchUsers,
	updateUserRole,
};
