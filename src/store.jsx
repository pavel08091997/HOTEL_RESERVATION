import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer } from './reducers/userReducer';
import { usersReducer } from './reducers/usersReducer';
import { hotelList } from './reducers/hotelListReducer';
import { specificHotel } from './reducers/specificHotelReducer';

const reducer = combineReducers({
	user: userReducer,
	users: usersReducer,
	hotelList: hotelList,
	specificHotel: specificHotel,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
