var arr = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(sum(arr));
function sum(arr) {
    let array = arr.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
    return array;
}
export {};
