// get-users.js
export const getUsers = async (login) => {
	try {
	  const response = await fetch('http://localhost:3000/users');

	  if (!response.ok) {
		throw new Error('Network response was not ok');
	  }

	  const loadedUsers = await response.json();

	  // Если вам нужно найти пользователя по логину
	  return loadedUsers.find(user => user.login === login) || null; // Возвращаем пользователя или null
	} catch (error) {
	  console.error('Ошибка при загрузке пользователей:', error);
	  return null; // Обработка ошибок
	}
  };
  