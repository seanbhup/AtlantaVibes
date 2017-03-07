import {combineReducers} from "redux";
import LoginModalReducer from './LoginModalReducer.js'
import LoginReducer from './LoginReducer.js'
import RegisterReducer from './RegisterReducer.js'


const masterReducer = combineReducers({
    loginModal: LoginModalReducer,
    login: LoginReducer,
    register: RegisterReducer

});

export default masterReducer;
