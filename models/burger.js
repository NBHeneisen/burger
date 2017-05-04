var orm = require("../config/orm.js");
//create function calls from orm
orm.selectAll(function(result) {
    var data = result;
    console.log(data);
});


module.exports = burger.js;