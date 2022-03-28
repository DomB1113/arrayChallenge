// 1 Write a function that is given an array and each time the value is "food" it should 
// console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alwaysHungry(arr) {
    var foodCount = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            foodCount++;
        }
    }
    if(foodCount == 0) {
        console.log("I'm hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// 2 high pass filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>cutoff)
        filteredArr.push(arr[i])
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// 3 better than average 
function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i]
    }
    var avg = sum / arr.length
    var count = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i]>avg){
            count++
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// 4 array reverse 
function reverse(arr) {
    var left = 0;
    var right = arr.length;
    while(left<right){
        var temp = arr[left]
        arr[left]= arr[right]
        arr[right]= temp
        left++
        right--
    }
    return arr;
}

// or

function reverse(arr) {
    var revarr =[]
    for(i=4; i>-1; i--){
        revarr.push(arr[i])
    }
    
    return revarr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// // 5 fibonacci array 
function fibonacciArray(n) {
    // the [0, 1] are the starting values of  the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length<n){
        var prev = fibArr[fibArr.length -1]
        var prevprev = fibArr[fibArr.length -2]
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
