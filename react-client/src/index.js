import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// pages featured
import { routes } from "./data/routes";
import NotFound from "./views/NotFound";

// all css
import './css/main.scss';

// main app is a router
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} exact path={route.path}
                           component={route.component} />
                ))};
                <Route path="*" component={NotFound} status={404}/>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
