import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
)(createStore);

export default createStoreWithMiddleware(reducer);
