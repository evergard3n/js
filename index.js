const input = document.getElementById("textBox")
const output = document.getElementById("result")
const ctof = document.getElementById("CtoF")
const ftoc = document.getElementById("FtoC")
const convertBtn = document.getElementById("convert")
let temp

function convert() {
    temp = Number(input.value);
    if(ctof.checked) {
        
        temp = temp * 9/5 + 32;
        output.textContent = temp.toFixed(1);
    }
    else if(ftoc.checked) {
        temp = (temp - 32) * (5/9);
        output.textContent = temp;
    }
    else {
        output.textContent ="pick an unit";
    }
}
