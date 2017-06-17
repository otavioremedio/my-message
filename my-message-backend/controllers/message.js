/**
 * Created by JOGOS on 16/06/2017.
 */
var Message = require('../models/message');

module.exports = {
    get: function(req, res){
            Message.find({}).populate('user','-pwd').exec(function (err, result) {
                res.send(result);
            })
    },
    post: function(req, res){
        console.log(req.body, req.user);
        req.body.user = req.user;
        //database.collection('messages').insertOne(req.body);
        var message = new Message(req.body);
        message.save();
        res.status(200); //ok
    }
}