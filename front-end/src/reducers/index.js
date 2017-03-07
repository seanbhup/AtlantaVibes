import {combineReducers} from "redux";
import LoginModalReducer from './LoginModalReducer.js'
import LoginReducer from './LoginReducer.js'


const masterReducer = combineReducers({
    loginModal: LoginModalReducer,
    login: LoginReducer

});

export default masterReducer;
