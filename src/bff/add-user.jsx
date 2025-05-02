import { getGenerateDate } from './get-generateate';

export const addUser = (login, password) => {
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			login,
			password,
			regisred_at: getGenerateDate(),
			role_id: 1,
		}),
	});
};
