import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './header.module.css';
import { ROLE } from '../roles/roles';
import { selectUserRole } from '../selectors/select-user-role';
import { selectUserLogin } from '../selectors/select-user-login';
import { logout } from '../actions/action-logout';
import { selectUserSession } from '../selectors/select-User-Session';

export const Header = () => {
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const dispatch = useDispatch();
	const session = useSelector(selectUserSession);


// Логи для проверки значений
console.log('Role ID:', roleId);
console.log('User Login:', login);
console.log('Session:', session);


	return (
		<>
			<div className={styles.header}>
				<Link to="/">
					<i className="fa-solid fa-hotel"></i>
				</Link>
				<div className={styles.largetText}>бронирование</div>
				<div className={styles.smallText}>отелей</div>

				{roleId === ROLE.GUEST ? (
					<Link to="/login" className={styles.authButton}>
						Войти
					</Link>
				) : (
					<>
						<div>{login}</div>
						<div onClick={() => dispatch(logout(session))}>
							Выход
						</div>
					</>
				)}
			</div>
		</>
	);
};
