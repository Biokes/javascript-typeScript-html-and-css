const print = console.log
let result = document.querySelector("#result")
let calculations  = [];
const buttons= document.querySelectorAll(".number")
buttons.forEach(button=>{
    button.addEventListener('click',(event)=>{
        event.preventDefault();
        result.value = `${eval(result.value += button.innerHTML)}`;
    })
})
const operators = document.querySelectorAll('.operator');
operators.forEach(details=>{
    details.addEventListener('click',(event)=>{
        event.preventDefault();
        if(result.value){calculations.push(`${result.value}`,`${details.innerHTML}`);}
        result.value = '';
    })
});
const equals = document.querySelector('#enter');
equals.addEventListener('click',(e)=>{
    e.preventDefault();
    calculations.push(result.value);
    try{result.value = calculate();}
    catch (error){
        result.value= 'invalid expression';
    }
});
const del = document.querySelector('.delete');
del.addEventListener('click',(e)=>{
    e.preventDefault();
    result.value=(result.value).slice(0,(result.value).length-1);
});
const cancelButton = document.querySelector('#cancel');
cancelButton.addEventListener('click',(event)=>{
    event.preventDefault();
    result.value = '0';
});
 const dot = document.querySelector('#dot')
 dot.addEventListener('click',(event)=>{
    result.value+=dot.innerHTML;
 });
function calculate(){
    let total = 0;
    total = parseFloat(calculations[0]);
    print(calculations);
    if(!calculations[calculations.length-1].match(/\d/)){
        calculations.pop();
    }
    for(let count = 1; count< calculations.length; count++){
        switch(calculations[count]){
            case "+":
                total+= parseFloat(calculations[++count]);
                break;
            case "-":
                total-= parseFloat(calculations[++count]);
                break;
            case "/":
                total/= parseFloat(calculations[++count]);
                break;
            case "*":
                total *= parseFloat(calculations[++count]);
                break;
            case '%':
                total/=100;
                break;
            default:
                total+= parseFloat(calculations[count])
        }
    }
    return total;
}

