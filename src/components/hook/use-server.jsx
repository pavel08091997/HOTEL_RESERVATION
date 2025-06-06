import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { selectUserSession } from '../../selectors/index.jsx';
import { server } from '../../bff/server.jsx';

export const useServerRequest = () => {
	const session = useSelector(selectUserSession);

	return useCallback(
		(operation, ...params) => {
			const request = ['register', 'authorize'].includes(operation)
				? params
				: [session, ...params];

			return server[operation](...request);
		},
		[session],
	);
};
