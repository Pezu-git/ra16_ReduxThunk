import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import serviceListReducer from "../redusers/serviceList";
import serviceAddReducer from "../redusers/serviceAdd";
import thunk from "redux-thunk";

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;