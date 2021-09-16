import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Cart from './components/cart/Cart';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer'
import ProductList from './components/ProductList';
import PageNotFound from  './components/PageNotFound';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      <Switch>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home" component={Home} />
        <Route path="/Cart" component={Cart} />
        <Route path="/ProductList" component={ProductList} />
        <Route component = {PageNotFound} />
      </Switch>
      </Provider>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
