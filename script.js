
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
    pre.innerText = ("-" + save_number);

}


let namee = "somil";
let greeting = "Hi,my name is ";
let myGreeting = (greeting + namee);

console.log(myGreeting);