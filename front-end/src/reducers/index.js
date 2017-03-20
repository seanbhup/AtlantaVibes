import {combineReducers} from "redux";
import LoginModalReducer from './LoginModalReducer.js';
import RegisterModalReducer from "./RegisterModalReducer.js";
import LoginReducer from './LoginReducer.js';
import RegisterReducer from './RegisterReducer.js';
import ViewAllReducer from './ViewAllReducer.js';
import TopRatedReducer from "./TopRatedReducer.js";
import FestivalDetailReducer from "./FestivalDetailReducer.js";
import PostCommentReducer from './PostCommentReducer.js';
import RatingsModalReducer from './RatingsModalReducer.js';


// Combine all pieces of state into one store
const masterReducer = combineReducers({
    loginModal: LoginModalReducer,
    registerModal: RegisterModalReducer,
    login: LoginReducer,
    register: RegisterReducer,
    viewAll: ViewAllReducer,
    topRated: TopRatedReducer,
    festivalDetail: FestivalDetailReducer,
    postedComment: PostCommentReducer,
    ratingsModal: RatingsModalReducer
});

export default masterReducer;
