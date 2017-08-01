import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './reducer/index';
import {Provider} from 'react-redux';
import FavListComponent from './favourite.list.component';

const store = createStore(rootReducer);
store.subscribe(()=>{console.log('store',store.getState())});
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/favorites" component={FavListComponent}/>
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

