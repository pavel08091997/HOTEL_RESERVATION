import { setUserRole } from '../api/set-user-role.jsx';
import { sessions } from '../sessions.jsx';
import { ROLE } from '../../roles/index.jsx';


export const updateUserRole = async (userId, newUserRoleId, userSession) => {
  console.log('updateUserRole вызвана с:', { userId, newUserRoleId, userSession });

  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    console.log('Доступ запрещен для сессии:', userSession);
    return {
      error: 'Доступ запрещен',
      res: null,
    };
  }
  try {
    console.log('Вызываем setUserRole...');
    await setUserRole(userId, newUserRoleId);
    console.log('setUserRole успешно выполнена');

    return {
      error: null,
      res: true,
    };
  } catch (error) {
    console.error('Ошибка при обновлении роли пользователя:', error);
    return {
      error: 'Ошибка приобновлении роли пользователя',
      res: null,
    };
  }
};

