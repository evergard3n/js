const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random()*(maxNum - minNum +1))+minNum;
console.log(answer);
let attempts=0;
let playerGuess;
let running = true;
while(running) {
    guess = window.prompt('Guess a number between '+minNum+' - '+maxNum);
    guess = Number(guess);
    if(isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    }
    else {
        attempts++;
        if(guess == answer) {
            window.alert("Correct! It took "+attempts+" attempts");
            running = false;
        }
        else if(guess < answer) {
            window.alert("too low dude");
        }
        else {
            window.alert("too high bro");
        }

    }
    
}
