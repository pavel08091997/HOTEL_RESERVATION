import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './Components/footer';
import { Content } from './components/content';
import { Authorization } from './pages/autorization';
import { Registration } from './pages/registration';
import { AppColumn } from './app.column';

export const App = () => {
	return (
		<AppColumn>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>}></Route>
					<Route path="/login" element={<Authorization />}></Route>
					<Route path="/filter" element={<div>Контент каталога</div>}></Route>
					<Route path="/reg" element={<Registration />}></Route>
					<Route
						path="/personal_account"
						element={<div>Личный Кабинет</div>}
					></Route>
					<Route
						path="/pages_admin"
						element={<div>Страница администратора</div>}
					></Route>
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};

export default App;
