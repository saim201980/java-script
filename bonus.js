
function largestNumber (number){
    var larger = number[0];
    for(i=0; i<number.length; i++){
        var element = number[i];
        if(element > larger){
        larger = element;
        }
    }
    return larger;
}
var number = [23, 34, 56, 75, 98, 18];
 var output = largestNumber(number);
console.log('output', output);

function smallestNumber (number){
    var small = number[0];
    for(i=0; i<number.length; i++){
        var element = number[i];
        if(element < small){
        small = element;
        }
    }
    return small;
}
var number = [23, 34, 56, 75, 98, 18];
 var output = smallestNumber(number);
console.log('output', output);