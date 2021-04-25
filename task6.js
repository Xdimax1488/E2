let arr = [1,2, 3,4,5]
let counter = 1
if (arr.length === 1) {
    console.log('массив состоит из одного элемента')
}
else {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i]) {
            counter += 1
        }
    }
}
if (counter != arr.length) {
    console.log('элементы в массиве различны')
}
else {
    console.log('все элементы в массиве одинаковы')
}