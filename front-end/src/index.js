import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

// Css
import '../public/stylesheets/styles.css';

// Redux, Router imports
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.js';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// import containers

import LandingPage from './containers/LandingPage.js';
import ViewAll from './containers/ViewAll.js';
import TopRated from "./containers/TopRated.js";
import FestivalDetail from './containers/FestivalDetail.js';

// Instantiate the store obect with createStore method. The reducers param is
// required. I also pass the login token retreived from locals storage as
// persistedState. Finally, reduxPromise middleware is passed to assist in my
// ajax requests.
import { loadState, saveState } from './localStorage';
const persistedState = loadState();

const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(
        reduxPromise
    )
)

store.subscribe(() => {
    saveState({
        login: store.getState().login
    })
})

ReactDOM.render(
    <Provider store={store} >
        <Router history={hashHistory}>
            <Route path="/" component={App} >
              <IndexRoute component={LandingPage} />
              <Route path="/view-all" component={ViewAll} />
              <Route path='/view-more/:festival' component={FestivalDetail} />
              <Route path="/top-rated" component={TopRated} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
