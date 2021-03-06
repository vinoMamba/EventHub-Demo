class EventHub {
    private cache: { [key: string]: Array<(data: unknown) => void> } = {}
    on(eventName: string, fn: (data: unknown) => void) {
        //初始化，如果this.cache[eventName] 是 undefined 就返回 []
        this.cache[eventName] = this.cache[eventName] || []
        this.cache[eventName].push(fn)
    }
    emit(eventName: string, data?: unknown) {
        (this.cache[eventName] || []).forEach(fn => fn(data));
    }
    off(eventName: string, fn: (data: unknown) => void) {
        const index = indexOf(this.cache[eventName], fn)
        if (index === -1) return
        this.cache[eventName].splice(index, 1)
    }
}
export default EventHub

/**
 * helper function  indexOf 
 * @param array 
 * @param item 
 * @returns 
 */
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