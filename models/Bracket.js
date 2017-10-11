var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var newBracket = new Schema ({
	title: {
		type: String,
		required: true
	},
	tourney_type: {
		type: String,
		required: true
	},
	// below will likely change
	// must handle # for bracket size and/or determine number by each entrant name
	size: {
		type: Number,
		required: true
	}
});


var Bracket = mongoose.model('Bracket', newBracket);

module.exports = Bracket;