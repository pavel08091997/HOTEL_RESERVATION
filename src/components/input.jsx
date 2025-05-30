/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const InputConteiner = forwardRef(({ className, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputConteiner)`
	height: 40px;
	margin: 0 0 10px:
	padding: 10px;
	font-size: 18px;
	border: 1px;
`;
