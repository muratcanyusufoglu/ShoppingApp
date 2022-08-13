import {createStore,combineReducers} from 'redux';
import numberReducer from './reducers/numberReducer';


const reducers = combineReducers({
    counter: numberReducer
})

const store = createStore(reducers);

export default store;
