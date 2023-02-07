function result() {
   var stringOne = document.getElementById("St1").value;
 
   var stringTwo = document.getElementById("St2").value;
 
   console.log({stringOne, stringTwo});
 
 if(stringOne.length !== stringTwo.length) {
    document.getElementById("REE").innerHTML = "Input texts with same length";
    return;
 }else{
   let map = {};
 
   for (let i = 0; i < stringOne.length; i++) {
       const char = stringOne[i];
 
       if (!map[char]) {
           map[char] = stringTwo[i];
       }
       else {
           if(map[char] === stringTwo[i]) document.getElementById("REE").innerHTML = "True";
           else document.getElementById("REE").innerHTML = "False";
      }
   }
 }
 };