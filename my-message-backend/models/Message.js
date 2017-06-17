/**
 * Created by JOGOS on 16/06/2017.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Message',{
    msg: String,
    user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});