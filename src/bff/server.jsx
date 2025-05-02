import { sessions } from './sessions';
import { addUser } from './add-user';
import { getUser } from './get-user';


//авторизация по логин, пароль. Начальный гость

export const server = {
	async logout(session) {
		sessions.remove(session);
	},
	// получаем пользователя с переданным логином
	async autorize(authLogin, authPassword) {
		const user = getUser(authLogin);

		if (!user) {
			return {
				error: 'Пользователь не найден',
				res: null,
			};
		}
		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}


		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session:sessions.create(user)
			},
		};
	},

	// Регистрация, теперь от обратного
	async register(regLogin, regPassword) {
		const user = getUser(regLogin);

		if (user) {
			return {
				error: 'Такой логин уже занят ',
				res: null,
			};
		}
		await addUser(regLogin, regPassword);

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session:sessions.create(user)
			},
		};
	},
};
