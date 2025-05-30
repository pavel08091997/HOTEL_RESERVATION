export const getRols = () =>
	fetch('http://localhost:3000/role').then((loadedRoles) => loadedRoles.json());
