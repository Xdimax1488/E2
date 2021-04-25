let num = prompt('введите число ')
let num_type = typeof num
if (!isNaN(num)){
    console.log(num)
} else if (isNaN(num)) {
    console.log(num + ' - это значение типа NaN')
}
else {
    console.log('Упс, кажется, вы ошиблись')
}