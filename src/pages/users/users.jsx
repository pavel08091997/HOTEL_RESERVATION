import { UserRow } from './components/user-row';
import { Content } from '../../components';
import styled from 'styled-components';
import { useServerRequest } from '../../components/hook';
import { useEffect, useState } from 'react';


// eslint-disable-next-line react/prop-types
const UsersConteiner = ({ className }) => {
	const [role, setRols] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);

	const requestServer = useServerRequest();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userRes = await requestServer('fetchUsers');
				if (userRes.error) {
					setErrorMessage(userRes.error);
					return;
				}
				setUsers(userRes.res);

				const rolesRes = await requestServer('fetchRols');
				if (rolesRes.error) {
					setErrorMessage(rolesRes.error);
					return;
				}
				setRols(rolesRes.res);
			} catch (error) {
				setErrorMessage(error.message);
			}
		};
		fetchData();
	}, [requestServer]);

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<div className="table-header">
					<div className="login-column">Логин</div>
					<div className="register-at-column">Дата регистрации</div>
					<div className="roleId-column">Роль</div>
				</div>
				{users.map(({ id, login, registeredAt, roleId }) => {
					return (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							role={role}
						/>
					);
				})}
			</Content>
		</div>
	);
};

export const Users = styled(UsersConteiner)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 570px;
	border: 1px solid black;

	& .table-header {
		display: flex;
		width: 100%;
		border: 1px solid black;
	}

	.login-column {
		width: 100%;
	}
	.register-at-column {
		width: 100%;
	}
	.roleId-column {
		width: 100%;
	}
`;
