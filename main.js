var numb = 90;


var numbr = document.getElementById("num");


function inc() {
    numb++;
    numbr.innertext = numb;
}
   
function dec() {
    numb--;
    numbr.innertext = numb;
}
   



function reset() {
    numb = 0;
    numb.innertext = numb;
}

   
console.log(numb);


