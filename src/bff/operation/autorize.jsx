import { getUser } from '../api/get-user.jsx';
import { sessions } from '../sessions.jsx';

export const authorize = async (authLogin, authPassword) => {
	const user = await getUser(authLogin);
	if (!user) {
		return {
			error: 'Пользователь не найден',
			res: null,
		};
	}

	const { id, login, password,roleId } = user;

	if (authPassword !== password) {
		return {
			error: 'Неверный пароль',
			res: null,
		};
	}

	return {
		error: null,
		res: {
			id,
			login,
			roleId,
			session: sessions.create(user),
		},
	};
};
