import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROLE } from '../roles';
import { useSelector } from 'react-redux';
import { selectUserRole, selectUserLogin, selectUserSession } from '../selectors';
import { useDispatch } from 'react-redux';
import { logout } from '../actions';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	text-decoration: none;
	cursor: pointer;
`;

const ControlPanelConteiner = ({ className }) => {
	const naiigate = useNavigate();

	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);
	const dispatch = useDispatch();

	return (
		<RightAligned>
			{roleId === ROLE.GUEST ? (
				<button>
					<Link to="/login" className={className}>
						Войти
					</Link>
				</button>
			) : (
				<>
					<div>{login}</div>
					<i
						className="fa-solid fa-right-from-bracket"
						onClick={() => dispatch(logout(session))}
					></i>
				</>
			)}

			<i className="fa-solid fa-backward" onClick={() => naiigate(-1)}></i>
		</RightAligned>
	);
};

export const ControlPanel = styled(ControlPanelConteiner)``;
