
const BillInput = document.getElementById("bill_input");

const percentageButtons = document.getElementsByClassName("tip_buttons");

const numOfPeople = document.getElementById("num_of_people");

const tipAmount = document.getElementById("tip_value");

const totalValue = document.getElementById("total_value");

const resetBtn = document.getElementById("reset_btn");

let bill = Number(BillInput.value);
let percentage = 0;
let people = Number(numOfPeople.value);

BillInput.addEventListener("input",(e)=>{
        bill = Number(e.target.value);
        if(bill > 0 && percentage > 0 && people > 0){
            calculator (bill,percentage,people);
        }
})

const arrayOfBtn = Array.from(percentageButtons);

arrayOfBtn.map( selected=>{
    selected.addEventListener("click",(e)=>{
        let temp  = e.target.textContent.split("%")[0];
        percentage = Number(temp);
        if(bill > 0 && percentage > 0 && people > 0){
            calculator (bill,percentage,people);
        }
        // console.log(temp);
    })
})

numOfPeople.addEventListener("input",(e)=>{
    people = Number(e.target.value);
    if(bill > 0 && percentage > 0 && people > 0){
        calculator (bill,percentage,people);
    }
})

function calculator (bill,percentage,people){
    resetBtn.disabled = false;
    let tip = parseFloat((bill*(percentage/100))/people);
    let total = bill + (tip*people) 
    // console.log(tip,total);
    tipAmount.innerText = `$ ${ tip }`;
    totalValue.innerText = `$ ${ total }`;

}

resetBtn.addEventListener("click",(e)=>{
    BillInput.value = 0;
    percentage = 0;
    numOfPeople.value = 0;
    tipAmount.textContent = "$0.00";
    totalValue.textContent = "$0.00";
    resetBtn.disabled = true;
})


