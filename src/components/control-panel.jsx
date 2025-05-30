import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROLE } from '../roles';
import { useSelector } from 'react-redux';
import { selectUserRole, selectUserLogin, selectUserSession } from '../selectors';
import { useDispatch } from 'react-redux';
import { logout } from '../actions';
import { Button } from './button';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	text-decoration: none;
	cursor: pointer;
`;

// eslint-disable-next-line react/prop-types
const ControlPanelConteiner = ({ className }) => {
	const naiigate = useNavigate();

	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);
	const dispatch = useDispatch();

	return (
		<RightAligned>
			{roleId === ROLE.CLIENT ? (
				<Button>
					<Link to="/login" className={className}>
						Войти
					</Link>
				</Button>
			) : (
				<>
					<div>{login}</div>
					<i
						className="fa-solid fa-right-from-bracket"
						onClick={() => dispatch(logout(session))}
					></i>
				</>
			)}
			<Link
				to="/users"
				className="fa-solid fa-users fa-flip-horizontal"
				aria-hidden="true"
				style={{ fontSize: '20px', color: 'black', padding: '0 20px 20px 20px' }}
			></Link>

			<i className="fa-solid fa-backward" onClick={() => naiigate(-1)}></i>
		</RightAligned>
	);
};

export const ControlPanel = styled(ControlPanelConteiner)`
	color: black;
	text-decoration: none;
`;
