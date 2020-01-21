var SITEURL      = 'http://localhost:3000/';
var ApiPath = 'http://localhost:2400/';
var axios = require('axios');
var Api = axios.create({
  baseURL: ApiPath,
  timeout: 100000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
});


module.exports={
	 SITEURL,ApiPath,Api
}

