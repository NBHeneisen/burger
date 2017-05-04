var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers_db";
        connection.query(queryString,function(err, result) {
            cb(result);
        });
    },
    insertOne: function() {
        //flesh out function
    },
    updateOne: function() {
        //flesh out function
    }
}

module.exports = orm;