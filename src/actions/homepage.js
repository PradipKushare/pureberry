import axios from 'axios';
var myModule = require('../../config.js');
var Api = myModule.Api;
var ApiPath = myModule.ApiPath;

import { PRODUCT_DETAILS_DATA } from './types';


// export function getProdList(data) {
//     return dispatch => {
//     return axios.post(ApiPath+'category/get_cat_products',data);    
//     }   
// }




// export function setDetData(data) {
// 	return dispatch => {
// 	return dispatch({ type: PRODUCT_DETAILS_DATA,
// 					 product_data : data
// 		});
// 	}
// }