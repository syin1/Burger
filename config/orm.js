// import MySQL connection
var connection = require('./connection.js');

// helper function
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
}

// object for SQL statement functions
var orm = {
  selectAll: function(tableInput, cb) {
    connection.query('select * from ' + tableInput + ';', function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    connection.query(
      'insert into ' +
        table +
        ' (' +
        cols.toString() +
        ') values (' +
        printQuestionMarks(vals.length) +
        ') ',
      vals,
      function(err, data) {
        if (err) {
          throw err;
        }
        cb(data);
      }
    );
  },

  updateOne: function() {}
};

module.exports = orm;
