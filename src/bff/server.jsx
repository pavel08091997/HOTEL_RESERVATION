import {
	logout,
	fetchRols,
	fetchUsers,
	authorize,
	register,
	removeUser,
} from './operation/index.jsx';
import { updateUserRole } from './operation/update-user-role.jsx';




export const server = {
	authorize,
	logout,
	register,
	fetchRols,
	fetchUsers,
	updateUserRole,
	removeUser,
};
