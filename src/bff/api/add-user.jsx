import { getGenerateDate } from '../utils/get-generateate';

export const addUser = (login, password) =>
	fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			login,
			password,
			regisred_at: getGenerateDate(),
			role_id: 0,
		}),
	}).then((createdUser) => createdUser.json());
