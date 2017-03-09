import {combineReducers} from "redux";
import LoginModalReducer from './LoginModalReducer.js'
import RegisterModalReducer from "./RegisterModalReducer.js"
import LoginReducer from './LoginReducer.js'
import RegisterReducer from './RegisterReducer.js'
import ViewAllReducer from './ViewAllReducer.js'

const masterReducer = combineReducers({
    loginModal: LoginModalReducer,
    registerModal: RegisterModalReducer,
    login: LoginReducer,
    register: RegisterReducer,
    viewAll: ViewAllReducer

});

export default masterReducer;
