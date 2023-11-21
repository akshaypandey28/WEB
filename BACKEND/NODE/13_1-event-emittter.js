const EventEmittter =require('events');
const customEmitter=new EventEmittter()

customEmitter.on('response', (name,id) => { //on-listen for an event 
    console.log(`data received user ${name} with id :${id} `)
})


customEmitter.on('response', () => {
    console.log(`some other logic here `)
})

customEmitter.emit('response','john',34) //just like function call to customEmitter.on
//such that john and 34 is passed to (name,id) 
//emit-emit an event
