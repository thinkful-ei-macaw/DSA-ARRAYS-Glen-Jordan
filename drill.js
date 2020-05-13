
const remove = (arr, num) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(remove([1, 8, 7, 6, 5, 4, 3, 2, 1], 5));

/**
 * Max sum
 */

const maxSum = (arr) => {

  if (!arr.length) {
    return arr
  }
  let sum = 0;
  let newArr = [];
  let maxValue = 0;
  for (let i = 0; i < arr.length; i++) {

    sum += arr[i]
    newArr.push(sum)
    maxValue = Math.max(...newArr)
    console.log(maxValue) //spread operator to return the whole array while finding the Max number in the array

  }

  return maxValue

}

console.log(maxSum([4, 6, -3, 5, -2, 1]))


const mergeArrays = (arr1, arr2) => {

  if (!arr1.length || !arr2.length) {
    return 'You must provide a length in the array'
  }


}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))

