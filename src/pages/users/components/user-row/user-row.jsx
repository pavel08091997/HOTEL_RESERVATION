/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useServerRequest } from '../../../../components/hook/use-server.jsx';
import { useState } from 'react';

const UserRowConteiner = ({
	className,
	id,
	login,
	registeredAt,
	roleId: userRoleId,
	role,
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);

	const [selectedRols, setSelectedRols] = useState(userRoleId);

	const requestServer = useServerRequest();

	const onRoleSave = (userId, newUserRoleId) => {
		requestServer('updateUserRole', userId, newUserRoleId).then(() => {
			console.log(`Сохранение роли:${userId},${newUserRoleId}`);
			setInitialRoleId(newUserRoleId);
		});
	};

	const onRoleChange = ({ target }) => {
		setSelectedRols(target.value);
	};

	return (
		<div className={className} key={id}>
			<div className="user-data"></div>
			<div className="login-column">{login}</div>
			<div className="register-at-column">{registeredAt}</div>

			<div className="roleId-column">
				<select value={selectedRols} onChange={onRoleChange}>
					{role.map(({ id: roleId, name: roleName }) => (
						<option key={roleId} value={roleId}>
							{roleName}
						</option>
					))}
				</select>
				<i
					className="fa-solid fa-floppy-disk"
					onClick={() => onRoleSave(id, selectedRols)}
				></i>
			</div>
			<i className="fa-solid fa-trash-can" onClick={onUserRemove}></i>
		</div>
	);
};

export const UserRow = styled(UserRowConteiner)`
	display: flex;
	width: 100%;
	.login-column {
		border: 1px solid black;
	}
	.register-at-column {
		border: 1px solid black;
	}
	.roleId-column {
		border: 1px solid black;
	}
`;
