var speech = "i am hungry. i want to eat my dinner";
var count = 0;
for(i=0; i<speech.length; i++){
    var char = speech[i];
        if( char == " "){
        count++;
    }
}
count++;
console.log(count);