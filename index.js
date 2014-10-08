var cling = require('static-cling').cling;
 
console.log(cling);
var config = {
    root: './public',
    port: 3456 
}
//overriding defaults
cling(config);