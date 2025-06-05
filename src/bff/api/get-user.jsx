import { transformUser } from '../transformers/transform-user.jsx';

export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3000/users?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(([loadedUser]) =>loadedUser && transformUser(loadedUser));
