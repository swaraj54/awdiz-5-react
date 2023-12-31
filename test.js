// // const firstArray = [1, 2, 3, 4]
// // const secondArray = [5, 6, 7, 8]

// // const combinedArray = [...firstArray, ...secondArray]

// // console.log(combinedArray)


// var num = 10;

// const res = calculation(num)
// console.log(res, "res");

// function calculation(num) {
//     for (var i = 1; i <= 1000000000; i++) {
//         num += 1 // this code will execute 1000000 times
//     }
//     return num;
// }

// 1.30 pm
var state = { user: null } // insitiute context - storage

const response = { data: { name: "Swaraj" } } //home - backend response

var action = { type: "LOGIN", payload: response.data.name }; // medium - dispatch()

// 1.35
state.user = action.payload // exchnage -- reducer function login, state changes
console.log(state) // you can access data by using state, {state} = useContext(MyCONTEXT)
