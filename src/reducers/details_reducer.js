import { PROD_DET_MODAL,PRODUCT_DETAILS_DATA } from '../actions/types';
const initialStateCustom = {
  open_detail_modal:false,
  product_data:[],

};

export default (state = initialStateCustom, action = {}) => {
  switch(action.type) {
        case PROD_DET_MODAL:
	       return{
            open_detail_modal: action.open_detail_modal
          };
          case PRODUCT_DETAILS_DATA:
	       return{
            product_data: action.product_data
        	};

       default: return state;
  }
}
