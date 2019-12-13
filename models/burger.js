var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(result){
            cb(result);
        });
    },
    insertOne: function(columns, values, cb){
        orm.insertOne("burgers", columns, values, function(result){
            cb(result);
        });
    },
    updateOne: function(objectColumnsValues, condition, cb){
        orm.updateOne("burgers", objectColumnsValues, condition, function(results){
            cb(results);
        });
    }
};

module.exports = burger;