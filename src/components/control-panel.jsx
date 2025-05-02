import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROLE } from '../roles/roles';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../selectors/select-user-role';
import { selectUserLogin } from '../selectors/select-user-login';
import { selectUserSession } from '../selectors/select-User-Session';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/action-logout';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	text-decoration: none;
`;

const ControlPanelConteiner = ({ className }) => {
	const naiigate = useNavigate();

	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);
	const dispatch = useDispatch();

	// Логи для проверки значений
	console.log('Role ID:', roleId);
	console.log('User Login:', login);
	console.log('Session:', session);

	return (
		<RightAligned>
			<button>
				{roleId === ROLE.GUEST ? (
					<Link to="/login" className={className}>
						Войти
					</Link>
				) : (
					<>
						<div>{login}</div>
						<div onClick={() => dispatch(logout(session))}></div>
					</>
				)}
			</button>

			<i className="fa-solid fa-backward" onClick={() => naiigate(-1)}></i>
		</RightAligned>
	);
};

export const ControlPanel = styled(ControlPanelConteiner)``;
