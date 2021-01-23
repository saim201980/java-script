
//with for loop
/*var factorial = 1;
for(i=1; i <= 5; i++){
    factorial = factorial * i;
    console.log(i, factorial);
}*/

//with while loop
/*var i=1;
var factorial = 1;
while(i <=5){
    factorial = factorial*i;
    i++;
}
console.log(factorial);*/
//with function
 function factorial(n){
    var factorial = 1;
    for(var i=1; i<=n; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var result = factorial(6);
console.log(result);