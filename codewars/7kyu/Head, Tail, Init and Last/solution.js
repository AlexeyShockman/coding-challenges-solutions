// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x

function head(arr) {
    return arr[0]
}
function tail(arr) {
    return arr.slice(1)
}
function init(arr) {
    return arr.slice(0, -1)
}
function last(arr) {
    return arr[arr.length-1]
}

console.log('head result:', head([5,1]), 'waiting for: 5')
console.log('tail result: ' ,tail([1]), 'waiting for: []')
console.log('init result:' ,init([1,5,7,9]), 'waiting for: [1,5,7]')
console.log('last result: ', last([7,2]), 'waiting for: 2')
