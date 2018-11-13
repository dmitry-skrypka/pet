import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Registration from './components/registration'
import LogIn from './components/login'
import { Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import history from "./history";
import thunk from 'redux-thunk';
import reducer from "./logic/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const composeEnhancer = composeWithDevTools || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)),
);

    // const store = createStore(
    //     reducer,
    //     composeWithDevTools(),
    //     applyMiddleware(...middleware)
    //
    // );
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/registration" component={Registration} />
                <Route exact path="/login" component={LogIn} />
            </Switch>
        </Router>

    </Provider>,
    document.getElementById("root")
);

// If you want your home-page to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
