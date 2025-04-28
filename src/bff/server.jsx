import { sessions } from './sessions';
import { getGenerateDate } from './get-generateate';
import { getUsers } from './get-users';

//авторизация по логин, пароль. Начальный гость

export const server = {
	async logout(session){
		 sessions.remove(session)
	},
	async autorize(authLogin, authPassword) {
		const user = await getUsers(authLogin);


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
				role: user.roleId,
				session: sessions.create(user)
			},
		};
	},

	// Регистрация, теперь от обратного
	async register(regLogin, regPassword) {
		const user = getUsers(regLogin);


		if (user) {
			return {
				error: 'Такой логин уже занят ',
				res: null,
			};
		}

		await fetch('http://localhost:3005/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				login: regLogin,
				password: regPassword,
				regisred_at: getGenerateDate(),
				role_id: 2,
			}),
		});
		const session = {
			// есть возможность разлогаться
			logout() {
				console.log('Вы вышли из системы');
				Object.keys(session).forEach((key) => {
					delete session[key];
				});
			},
			removeComment() {
				console.log('Авторизация выполнена');
			},
		};
		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				role: user.role_id,
				session: sessions.create(user)
			},
		};
	},
};
