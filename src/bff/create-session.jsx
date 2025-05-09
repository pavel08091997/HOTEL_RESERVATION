import { removeComment } from './user-action/remove-comment';
import { ROLE } from '../roles/roles';

export const createSession = (roleId) => {
	const session = {
		//удаляем все свойства и завершаем сессию
		logout() {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};
	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.GUEST: {
			break;
		}
		default:
		//"NO action"
	}
	return session;
};
