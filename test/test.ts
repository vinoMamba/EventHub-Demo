import EventHub from '../src/index'

const eventHub = new EventHub()

console.assert(eventHub instanceof Object === true)

//订阅
let called = false
eventHub.on('xxx', (data) => {
    called = true
    console.log(called)
    console.assert(data === 'xxx事件的内容')
})

//发布
eventHub.emit('xxx', 'xxx事件的内容')