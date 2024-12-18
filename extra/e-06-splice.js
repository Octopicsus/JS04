//splice

// Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

let newArr = arr.splice(3, 1, 'item');
console.log(arr);

console.log(newArr);
