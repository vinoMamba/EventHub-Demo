class EventHub {
    cache = {}
    on(eventName, fn) {
        //初始化，如果this.cache[eventName] 是 undefined 就返回 []
        this.cache[eventName] = this.cache[eventName] || []
        this.cache[eventName].push(fn)
    }
    emit(eventName, data?) {
        (this.cache[eventName] || []).forEach(fn => fn(data));
    }
    off(eventName, fn) {
        const index = indexOf(this.cache[eventName], fn)
        if (index === -1) return
        this.cache[eventName].splice(index, 1)
    }
}
export default EventHub

function indexOf(array, item) {
    if (array === undefined) return -1
    let index = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            index = i
            break
        }
    }
    return index
}