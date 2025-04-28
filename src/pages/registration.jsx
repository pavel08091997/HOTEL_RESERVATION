import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const registerFormShema = yup.object().shape({
	login: yup
		.string()
		.matches(
			/^[\w_]*$/,
			'В логине должны быть только буквы, цифры и нижние подчеркивания',
		)
		.min(3, 'Минимум 3 символа')
		.max(15, 'Максимум 15 символов'),
	password: yup
		.string()
		.matches(
			/^[\w_]*$/,
			'В пароле должны быть только буквы, цифры и нижние подчеркивания',
		)
		.min(3, 'Минимум 3 символа')
		.max(15, 'Максимум 15 символов'),
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
		},
		resolver: yupResolver(registerFormShema),
	});

	const regErrorMessage = errors.login?.message || errors.password?.message;

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="Введите логин"
					{...register('login')}
					autoComplete="username"
				/>
				<input
					type="password"
					placeholder="Введите пароль"
					{...register('password')}
				/>
				<button
					disabled={!!regErrorMessage}
					type="onSubmit"
					autoComplete="current-password"
				>
					Зарегистрироваться
				</button>
				{regErrorMessage && <div>{regErrorMessage}</div>}
				<link to="/reg"></link>
			</form>
		</div>
	);
};
