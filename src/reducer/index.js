
import {combineReducers} from 'redux';
import items from './items.reducer';
import favourite from './fav.reducer';
const rootReducer  = combineReducers({items,favourite});
export default rootReducer;