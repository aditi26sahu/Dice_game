
// let ele=document.body.getElementsByClassName("img1");
// let ele2=document.body.getElementsByClassName("img2");
//while(1){
let a = Math.floor(Math.random() * 6) + 1;
let b = Math.floor(Math.random() * 6) + 1;
let t1=0;
let t2=0;
function main(){
const three = () => {
    
    // img2.addEventListener('click', () => {

        if (a > b) {
            head.innerHTML = "Player 1 wins";
        }
        else if (a < b) {
            head.innerHTML = "Player 2 wins"
        }
        else
            head.innerHTML = "Tei!"

        console.log("three")
        t1=0;
        t2=0;
    }
    //)


//}

console.log("value of a")
const one = () => {
//let bu=document.getElementsByClassName("p1")
    b1.addEventListener("click", () => {
        
        if (a == 1) {
            img1.src = "dice1.png";
            //ele.innerHTML="aditi" 
        }
        else if (a == 2) {
            img1.src = "dice2.png";
        }
        else if (a == 3) {
            img1.src = "dice3.png";
        }
        else if (a == 4) {
            img1.src = "dice4.png";
        }
        else if (a == 5) {
            img1.src = "dice5.png";
        }
        else {
            img1.src = "dice6.png";
        }
        console.log("one")
        t1=1;
        if(t1==1&& t2==1){
            three();
            }
    }

    )


}
console.log("inside func")

// const one1=async ()=>{
//     let a=await one();
// }
one();
//let x=await one();
//console.log("b",x);


console.log("value of b")

const two = () => {

   // let bu=document.getElementsByClassName("p1")
    b2.addEventListener("click", () => {
        if (b == 1) {
            img2.src = "dice1.png";

        }
        else if (b == 2) {
            img2.src = "dice2.png";
        }
        else if (b == 3) {
            img2.src = "dice3.png";
        }
        else if (b == 4) {
            img2.src = "dice4.png";
        }
        else if (b == 5) {
            img2.src = "dice5.png";
        }
        else {
            img2.src = "dice6.png";
        }
        t2=1;
        if(t1==1&& t2==1){
            three();
            }
        console.log("two")
    })


}
two();}
main();
img1.onload=()=>{
    console.log("onload")
main();
}
