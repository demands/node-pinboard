var pinboard = require('../'),
    cradle = require('cradle'),
    db = new(cradle.Connection)().database('pinboard');

db.exists(function(exists) {
    if(!exists) db.create('pinboard');
});

pinboard.config({
	username: 'username',
	password: 'password'
});

pinboard.all(function(data) {
    data.forEach(function(item, index) {
        db.save("pin" + index, item, function (err, res) {
            if (err) throw err;
            console.log( item.href + ' saved!' )
      });
    });
});
