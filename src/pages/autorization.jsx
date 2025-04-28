import styles from './autorization.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../bff/server';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/set-user';

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

	const formErrorMessage = errors.login?.message || errors.password?.message;

	const ErrorMessage = formErrorMessage || errorServer;

	const dispatch = useDispatch();

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
