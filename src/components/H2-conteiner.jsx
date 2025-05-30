/* eslint-disable react/prop-types */
import styled from 'styled-components';

const H2Conteiner = ({ children, className }) => {
	return <h2 className={className}>{children} </h2>;
};

export const H2 = styled(H2Conteiner)`
	margin: 40px;
`;
