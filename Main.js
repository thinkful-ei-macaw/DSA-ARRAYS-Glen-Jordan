/* eslint-disable indent */
/* eslint-disable semi */
const Array = require('./Array')
let arr = new Array();


function main() {

    Array.SIZE_RATIO = 3;

    arr.push('tauhida');
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.insert()
    // arr.pop();
    // arr.pop();
    // arr.pop();
    // console.log(arr.get(1))
    console.log(arr.get(0))

}

main();



