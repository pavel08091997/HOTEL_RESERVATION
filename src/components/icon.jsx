import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LargeText = styled.div`
	font-size: 32px;
	font-weight: bold;
`;

const SmallText = styled.div`
	font-size: 12px;
	font-weight: bold;
`;

const ConteinerIcon = ({ className }) => {
	return (
		<div className={className}>
			<Link
				to="/"
				className="fa-solid fa-hotel fa-flip-horizontal"
				aria-hidden="true"
				style={{ fontSize: '60px', color: 'blue', padding: '0 20px 20px 20px' }}
			></Link>
			<div>
				<LargeText>Теремок</LargeText>
				<SmallText>Бронирование Отелей</SmallText>
			</div>
		</div>
	);
};

export const Icon = styled(ConteinerIcon)`
	display: flex;
	margin-top: -14px;
`;
