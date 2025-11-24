let arr = [10,20,30,40,50];
let sum = 0;
let largest = arr[0];

for(let i = 0; i<arr.length; i++){
    sum += arr[i];
    if(arr[i]>largest){
        largest = arr[i];
    }
}
console.log("Sum: ", sum);
console.log("Largest:", largest);

