import PropTypes from 'prop-types';
import styled from 'styled-components';

const AppColumnConteiner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: rgb(216, 235, 252);
	margin: 0 auto;
`;

export const AppColumn = ({ children }) => {
	return <AppColumnConteiner>{children}</AppColumnConteiner>;
};

// children обязательны и могут быть любого типа
AppColumn.propTypes = {
	children: PropTypes.node.isRequired,
};
