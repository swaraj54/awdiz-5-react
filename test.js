// const firstArray = [1, 2, 3, 4]
// const secondArray = [5, 6, 7, 8]

// const combinedArray = [...firstArray, ...secondArray]

// console.log(combinedArray)


var num = 10;

const res = calculation(num)
console.log(res, "res");

function calculation(num) {
    for (var i = 1; i <= 1000000000; i++) {
        num += 1 // this code will execute 1000000 times
    }
    return num;
}

