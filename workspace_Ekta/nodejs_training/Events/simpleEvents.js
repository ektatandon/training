let EventEmitter = require('events').EventEmitter,
a = new EventEmitter

//subscribe to event
a.on('inserted',()=>console.log('record inserted'));

//raise event
a.emit('inserted');