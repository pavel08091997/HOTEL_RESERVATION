export const transformUser = (dbuser) => ({
	id: dbuser.id,
	login: dbuser.login,
	password: dbuser.password,
	registeredAt: dbuser.regisred_at,
	roleId: dbuser.role_id,
});
