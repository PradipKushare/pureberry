import { combineReducers } from 'redux'
import custom from './custom';
import details_reducer from './details_reducer';
import product_Details_reducer from './product_Details_reducer';

export default combineReducers({
 custom,details_reducer,product_Details_reducer
});


