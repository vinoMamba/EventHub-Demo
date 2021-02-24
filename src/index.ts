class EventHub {
    cache = {};
    on(eventName, fn) {
        // 初始化,把fn推到eventName数组
        if (this.cache[eventName] === undefined) {
            this.cache[eventName] = []
        }
        this.cache[eventName].push(fn)
    }
    emit(eventName) {
        //把cache数组里面的函数一次调用
        let array = this.cache[eventName]
        if (array === undefined) {
            array = []
        }
        array.forEach(fn => {
            fn()
        });
    }
}

export default EventHub;