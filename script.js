let count = 0;
let saved = 0;

let count_el = document.getElementById("Number");
let pre = document.getElementById("previous");

function increment(){
    count += 1;
    count_el.innerText = count;
    console.log(count);
}


function save(){
    saved = count;
    console.log("The saved number is:" + saved);
    count =0;
    count_el.innerText = count;
    pre.innerText = (saved +  "-" +  pre.innerText);
}