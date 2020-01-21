import { PRODUCT_DETAILS_DATA } from '../actions/types';
const initialStateCustom = {
  product_data:[],

};

export default (state = initialStateCustom, action = {}) => {
  switch(action.type) {
          case PRODUCT_DETAILS_DATA:
          return{
            product_data: action.product_data
        	};

       default: return state;
  }
}
