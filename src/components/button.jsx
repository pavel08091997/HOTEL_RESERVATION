import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const ButtonConteiner = ({ children, className, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonConteiner)`
	height: 32px;
	justify-content: space-between;
	align-items: center;
	font-size: 18px;
	border: 1px solid rgb( 0,0,0)
	position: fixed;
	top: 0;
	width: ${({ width = '100px' }) => width}
	background-color: rgb(214, 240, 247);
	text-decoration: none;
	color: black
`;
