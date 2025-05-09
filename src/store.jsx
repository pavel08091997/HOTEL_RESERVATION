import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	userReducer,
	usersReducer,
	hotelList,
	specificHotel,
	appReducer,
} from './reducers';

const reducer = combineReducers({
	user: userReducer,
	users: usersReducer,
	hotelList: hotelList,
	specificHotel: specificHotel,
	app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
