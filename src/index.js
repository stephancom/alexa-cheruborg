'use strict';
var Alexa = require("alexa-sdk");
var APP_ID = undefined; // TODO replace with app ID

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
        var eventSlot = this.event.request.intent.slots.event;
        var whichEvent = eventsMap[eventSlot.value];
        switch(whichEvent) {
            case 'gate':
                this.attributes['what'] = "the gate opens";
                break;
            case 'tuesday':
                this.attributes['what'] = "tutu tuesday";
                break;
            case 'burn':
                this.attributes['what'] = "the man burns";
                break;
            case 'temple':
                this.attributes['what'] = "the temple burns";
                break;
            case 'juplaya':
                this.attributes['what'] = "the fourth of juplaya";
                break;
            case 'equinox':
                this.attributes['what'] = "the burnal equinox";
                break;
            default:
                this.attributes['what'] = "monkeys fly out of my butt";
                break;            
        }
        this.emit(':tell', "You asked the days until "+this.attributes['what']);
    },
    'Placeholder': function () {
        this.emit(':tell', 'Fuck your burn!');
    },
    'Unhandled': function() {
        this.emit(':tell', 'I am clueless');
    }
};

var eventsMap = {
    "i can go home": 'gate',
    "gate opens": 'gate',
    "burning man": 'gate',
    "thing in the desert": 'gate',
    "tutu tuesday": 'tuesday',
    "man burns": 'burn',
    "man falls": 'burn',
    "the temple burns": 'temple',
    "juplaya": 'juplaya',
    "fourth of juplaya": 'juplaya',
    "burnal equinox": 'equinox'
}