function isPrime(n){
    for(i=2; i < n; i++){
        if(n % i == 0){
            return 'not prime number';
        }
    }
    return 'prime number';
}
var result = isPrime(53);
console.log(result);