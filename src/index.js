'use strict';
var Alexa = require("alexa-sdk");
var APP_ID = undefined; // TODO replace with app ID
// var playa_events = require('./events');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('Placeholder');
    },
    'CountdownIntent': function () {
        this.emit('Placeholder')
    },
    'Placeholder': function () {
        this.emit(':tell', 'Fuck your burn!');
    },
    'Unhandled': function() {
        this.emit(':tell', 'I am clueless');
    }
};