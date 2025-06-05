import { H2 } from '../H2-conteiner.jsx';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	flex-decoration: colum;
	align-items: center;
`;

// eslint-disable-next-line react/prop-types
export const Content = ({ children, error }) =>
	error ? (
		<Div>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</Div>
	) : (
		children
	);
