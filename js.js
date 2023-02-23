// function arraysort(arr,target){
   
//     if(arr.includes(target)){
//         return arr.indexOf(target)
//     }else return -1
    
//    }


// var array= [9,5,3,2,1]
// console.log(arraysort(array,10))



//first element in an array 
// function findfirstrepelem(arr){
//     var arr2 = []
//     var a = []
//     for(var i=0;i<arr.length;i++){
//         if(arr2.includes(arr[i])){
//             a.push(arr[i])
//         }else{
//             arr2.push(arr[i])
//         }
//     }
//     return a[0]
// }
// const array = [2,3,6,8,9,6,3,2]
// console.log(findfirstrepelem(array))


//return soerted array
// function sortedarraylist(arr){
//    var sortedarr = arr.sort()
//    for(var elem of sortedarr){
//     console.log(elem.split(''))
//    }
// }
// var arr = ['vaibhav','almanac','is','fat','button','aabaca']
// console.log(sortedarraylist(arr))




function findPair(arr, size, n) {
   let i = 0;
   let j = 1;

   while (i < size && j < size) {
       if (i != j && arr[j] - arr[i] == n) {
           console.log("Pair Found: (" + arr[i] + ", " +
           arr[j] + ")");
           return true;
       }
       else if (arr[j] - arr[i] < n)
           j++;
       else
           i++;
   }

   console.log("No such pair");
   return false;
}
let arr = [1, 8, 30, 40, 100];
let size = arr.length;

findPair(arr, size,70);
