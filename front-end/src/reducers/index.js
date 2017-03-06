import {combineReducers} from "redux";
import loginModalReducer from './LoginModalReducer.js'

const masterReducer = combineReducers({
    loginModal: loginModalReducer
});

export default masterReducer;
