// import orm to create wrapper functions that interacts with the DB
var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  }
};

// export DB functions for controller - (burgers_controller.js)
module.exports = burger;
