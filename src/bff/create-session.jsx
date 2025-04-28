export const  createSession =()=>{
		// если сессия прошла то:
		const session = {
			logout() {
				Object.keys(session).forEach((key) => {
					delete session[key];
				});
			},
			removeComment() {
				console.log('Авторизация выполнена');
			},
		};
}
