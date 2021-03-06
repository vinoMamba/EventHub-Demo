import EventHub from '../src/index'


const test1 = (message) => {
    const eventHub = new EventHub()
    console.assert(eventHub instanceof Object === true, 'eventHub 是一个对象')
    console.log(message)
}

const test2 = (message) => {
    const eventHub = new EventHub()
    //订阅
    let called = false
    eventHub.on('xxx', (content) => {
        called = true
        console.assert(content === 'xxx事件的内容')
    })
    //发布
    eventHub.emit('xxx', 'xxx事件的内容')
    setTimeout(() => {
        console.assert(called === true)
        console.log(message)
    }, 1000);
}

const test3 = (message) => {
    const eventHub = new EventHub()
    let called = false
    const fn1 = () => {
        called = true
    }
    eventHub.on('yyy', fn1)
    eventHub.off('yyy', fn1)
    eventHub.emit('yyy')

    setTimeout(() => {
        console.assert(called === false)
        console.log(message)
    }, 2000);
}

test1('eventHub 是一个对象')
test2('.on 之后 emit, 会触发on 的函数')
test3('.off 有用')