import { getUsers } from './get-users';

export const getUser = async (loginToFind) => {
	const users = await getUsers();

	// логин ввода пользователя = логин на сервере
	return users.find(({ login }) => login === loginToFind);
};
