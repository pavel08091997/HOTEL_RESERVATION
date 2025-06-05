import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff/server.jsx';
import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { setUser } from '../../actions/index.jsx';
import { selectUserRole } from '../../selectors/select-user-role.jsx';
import { ROLE } from '../../roles/index.jsx';
import { Input, H2, Button } from '../../components/index.jsx';

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

const StyledAuth = styled.form`
	display: inline-grid;
	gap: 3px;
`;

const StyledLink = styled(Link)`
    color: black;
    padding: 10px;
    font-size: 18px;
}`;

const ErrorMessage = styled.div`
	background-color: pink;
`;

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

	const errorMessage = formErrorMessage || errorServer;

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

	if (roleId !== ROLE.CLIENT) {
		return <Navigate to="/" />;
	}

	const formServer = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}
			dispatch(setUser(res));
		});
	};

	return (
		<div>
			<H2> Авторизация</H2>
			<StyledAuth onSubmit={handleSubmit(formServer)}>
				<Input
					type="text"
					{...register('login', { onChange: () => setServerError(null) })}
					placeholder="Введите логин"
					autoComplete="username"
				/>
				<Input
					type="password"
					{...register('password', { onChange: () => setServerError(null) })}
					placeholder="Введите пароль"
					autoComplete="current-password"
				/>
				<Button type="submit" disabled={!!formErrorMessage}>
					Авторизация
				</Button>
				<StyledLink to="/reg"> Регистрация</StyledLink>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
			</StyledAuth>
		</div>
	);
};
