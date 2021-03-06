import EventHub from '../src/index'

const eventHub = new EventHub()

console.assert(eventHub instanceof Object === true)

//订阅
let called = false
eventHub.on('xxx', () => {
    called = true
    console.log(called)
})

//发布
eventHub.emit('xxx')