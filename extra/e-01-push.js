// push() 

// Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.

let arr = [];

for (let i = 0; i < 5; i++){
    let digit = parseInt(prompt('Enter digit #' + (i + 1)));
    arr.push(digit);
}

console.log(arr);