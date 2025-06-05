import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Page } from './components';
import { Authorization } from './pages/autorization/autorization';
import { Registration } from './pages/registration/registration';
import	 {Users} from './pages/users/users';
import { RoomStatus } from './pages/room-details/room-status';
import { AppColumn } from './app.column';

export const App = () => {
	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>}></Route>
					<Route path="/login" element={<Authorization />}></Route>
					<Route path="/details/:id" element={<RoomStatus />}></Route>
					<Route path="/reg" element={<Registration />}></Route>
					<Route path="/users" element={<Users />}></Route>
					<Route
						path="/personal_account"
						element={<div>Личный Кабинет</div>}
					></Route>
					<Route
						path="/pages_admin"
						element={<div>Страница администратора</div>}
					></Route>
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
};

export default App;
