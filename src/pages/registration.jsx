import styles from './autorization.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../bff/server';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/set-user';

const regFormShema = yup.object().shape({
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
	passcheck: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

export const Registration = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormShema),
	});

	const [errorServer, setServerError] = useState(null);

	const formErrorMessage =
		errors.login?.message || errors.password?.message || errors.passcheck?.message;

	const ErrorMessage = formErrorMessage || errorServer;

	const dispatch = useDispatch();

	const formServer = ({ login, password }) => {
		server.register(login, password).then(({ error, res }) => {
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
				<input
					type="password"
					{...register('passcheck')}
					placeholder="Повторите пароль"
					autoComplete="current-password"
				/>
				<button type="submit" disabled={!!formErrorMessage}>
					Регистрация
				</button>
				{formErrorMessage && <div>{formErrorMessage}</div>}
			</form>
		</div>
	);
};
