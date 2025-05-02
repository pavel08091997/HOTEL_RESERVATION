// get-users.js
export const getUsers = async () => {
	try {
	  const response = await fetch('http://localhost:3000/users');

	  // Проверяем, успешен ли ответ
	  if (!response.ok) {
		throw new Error('Network response was not ok');
	  }

	  const loadedUsers = await response.json();
	  return loadedUsers; // Возвращаем загруженных пользователей
	} catch (error) {
	  console.error('Failed to fetch users:', error);
	  return []; // Возвращаем пустой массив в случае ошибки
	}
  };
