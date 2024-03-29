import React, { Component } from 'react';
import './app.css';
import { Provider } from 'react-redux';
// import { ConnectedRouter as Router } from 'react-router-redux';
import { history, store } from './services/configure-store';
import Main from './main/containers/main';
import Router from "react-router-dom/es/Router";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Main/>
                </Router>
            </Provider>
        );
    }
}

export default App;