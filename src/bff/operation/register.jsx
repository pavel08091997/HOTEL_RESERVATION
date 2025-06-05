import { sessions } from '../sessions.jsx';
import { getUser,addUser } from '../api/index.jsx';

// Регистрация, теперь от обратного
export const register = async (regLogin, regPassword) => {
	const existedUser = await getUser(regLogin);
	if (existedUser) {
		return {
			error: 'Такой логин уже занят ',
			res: null,
		};
	}
	const user = await addUser(regLogin, regPassword);
	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			roleId: user.role_id,
			session: sessions.create(user),
		},
	};
};
