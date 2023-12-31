import counterReducer from "./reducers";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer
})

export default rootReducer;