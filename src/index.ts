class EventHub {
    cache = {}
    on(eventName, fn) {
        //初始化，如果this.cache[eventName] 是 undefined 就返回 []
        this.cache[eventName] = this.cache[eventName] || []
        this.cache[eventName].push(fn)
    }
    emit(eventName, data) {
        (this.cache[eventName] || []).forEach(fn => fn(data));
    }
}

export default EventHub