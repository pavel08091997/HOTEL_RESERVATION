import styles from './autorization.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../bff'
import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { setUser } from '../actions';
import { selectUserRole } from '../selectors/select-user-role';
import { ROLE } from '../roles';

const authFormShema = yup.object().shape({
	login: yup
		.string()
		.required('Введите логин')
		.matches(/^[\w_]*$/, 'Должны использоваться, цифры, буквы и нижние подчеркивания')
		.min(3, 'Должно быть не меньше 3 символов')
		.max(15, 'Должно быть не более 15 символов'),
	password: yup
		.string()
		.required('Введите пароль')
		.matches(/^[\w_]*$/, 'Должны использоваться, цифры, буквы и нижние подчеркивания')
		.min(3, 'Должно быть не меньше 3 символов')
		.max(15, 'Должно быть не более 15 символов'),
});

export const Authorization = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormShema),
	});

	const [errorServer, setServerError] = useState(null);

	const roleId = useSelector(selectUserRole);

	const formErrorMessage = errors.login?.message || errors.password?.message;

	const dispatch = useDispatch();
	const store = useStore();

	useEffect(() => {
		let currentWasLogout = store.getState().app.wasLogout;

		return store.subscribe(() => {
			let prevwiosWasLogout = currentWasLogout;
			currentWasLogout = store.getState().app.wasLogout;

			if (currentWasLogout !== prevwiosWasLogout) {
				reset();
			}
		});
	}, [reset, store]);

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	const formServer = ({ login, password }) => {
		server.autorize(login, password).then(({ error, res }) => {

			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}
			dispatch(setUser(res));
		});
	};

	return (
		<div>
			<form className={styles.authForm} onSubmit={handleSubmit(formServer)}>
				<input
					type="text"
					{...register('login')}
					placeholder="Введите логин"
					autoComplete="username"
				/>
				<input
					type="password"
					{...register('password')}
					placeholder="Введите пароль"
					autoComplete="current-password"
				/>
				<button type="submit" disabled={!!formErrorMessage}>
					Авторизация
				</button>
				<Link to="/reg"> Регистрация</Link>
				{formErrorMessage && <div>{formErrorMessage}</div>}
			</form>
		</div>
	);
};
