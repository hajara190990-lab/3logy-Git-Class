//GRADE CALCULATOR
//require readline module
//collect user name
//display name
//check if the score is A
//check if the score is B
//check if the score is C
//check if the score is D
//check if the score is F


const readline = require('readline').createInterface({ 
input: process.stdin, 
output: process.stdout 
}); 

readline.question("what is your name?", username => {
    console.log(`hi and welcome to grade calculator ${username}`);

readline.question("Enter your test score (0-100): ", scoreInput => { 
const score = parseInt(scoreInput); 
let grade; 
if (score >= 90) { 
    grade = "A"; 
} else if (score >= 80) { 
    grade = "B"; 
} else if (score >= 70) { 
    grade = "C"; 
} else if (score >= 60) { 
    grade = "D"; 
} else { 
    grade = "F"; 
} 
  console.log(`You got a ${grade}!`); 

  readline.close(); 
}); 

})

