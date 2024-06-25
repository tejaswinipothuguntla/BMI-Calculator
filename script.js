const btn=document.getElementById("cal");
const output=document.getElementById("ans");
const weightout=document.getElementById("weight-ans");
function calculateBMI(){
    const heightVal=document.getElementById("height").value/100;
    const weightVal=document.getElementById("weight").value;
    const BMI=weightVal/(heightVal*heightVal);
    console.log(BMI);
    output.value=BMI.toFixed(2);
    if(BMI<18.5){
        weightout.innerText="Under weight";
    }
    else if(BMI>=18.5&&BMI<=24.9){
        weightout.innerText="Normal weight";
    }
    else if(BMI>=25&&BMI<=29.9){
        weightout.innerText="Over weight";
    }else if(BMI>=30){
        weightout.innerText="Obesity";
    }
}

btn.addEventListener("click",calculateBMI);
