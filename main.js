/* setTimeout(() => {
    document.getElementById("fr").classList.add("hidden");
    document.getElementById("bc").classList.remove("hidden");
}, 4000); */

let submit = document.querySelector(".submit button");
let rates = document.querySelectorAll(".btn");
let myAns = document.querySelector(".my-ans");

let ans = 0;
console.log(myAns);

submit.addEventListener('click',() => {
    if(ans === 0){
        alert("Sorry! this field can't be empty");
    }
    else{
        myAns.innerHTML = ans;
        document.getElementById("fr").classList.add("hidden");
        document.getElementById("bc").classList.remove("hidden");
    }
    
});

rates.forEach(rate => {
    rate.addEventListener('click',() => {
        ans = rate.innerHTML;
    })
});

