
let count = 0;
let lr_count = document.getElementById("hh");
let save_number = 0;
let pre = document.getElementById("pre");

function Increment(){
    count += 1;
    lr_count.innerText = count;
    console.log(count);
}

function save(){
    save_number = count;
    console.log("save number is:",save_number);
    count = 0;
    lr_count.innerText = 0;
    pre.innerText = ("    " + save_number + "-" + "    " + pre.innerText );

}

let welcome_el = document.getElementById("welcome-el");

let myName = "somil";
let myGreeting = "Welcome back ";

welcome_el.innerText = myGreeting + myName;

