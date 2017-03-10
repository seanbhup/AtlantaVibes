import {combineReducers} from "redux";
import LoginModalReducer from './LoginModalReducer.js';
import RegisterModalReducer from "./RegisterModalReducer.js";
import LoginReducer from './LoginReducer.js';
import RegisterReducer from './RegisterReducer.js';
import ViewAllReducer from './ViewAllReducer.js';
import TopRatedReducer from "./TopRatedReducer.js";
import UpcomingReducer from "./UpcomingReducer.js";

const masterReducer = combineReducers({
    loginModal: LoginModalReducer,
    registerModal: RegisterModalReducer,
    login: LoginReducer,
    register: RegisterReducer,
    viewAll: ViewAllReducer,
    topRated: TopRatedReducer,
    upcoming: UpcomingReducer

});

export default masterReducer;
