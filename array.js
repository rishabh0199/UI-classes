var arr = [55,55,33,22,5,6,7,55,5,5];
var noDup = [];
for (let index = 0; index < arr.length; index++){
    if(noDup.indexOf(arr[index]) == -1){
        noDup.push(arr[index]);
        }
    }
    document.write(noDup);