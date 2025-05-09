import './index.css';
import { store } from './store.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
	<StrictMode>
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	</StrictMode>
);
