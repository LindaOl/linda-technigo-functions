/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/


/* Commenting out cause i got an error

const theCoders = (driver, navigator) => {
    console.log(
      `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
    );
  };
  theCoders("jennie", "tom");
*/


/*
2)
Pass in only ONE name when you call the function and see what happens.
(HINT, you should get undefined...)
*/
/*theCoders('jennie');*/

/*
3) 
create a function that checks which name is the longest when comparing the coders 
and print out: "The driver has the longest name." or "The navigator has the longest name" 
or if the names ar the same length "The driver and the navigator has equally long names"
*/

const findLongestName = (driver, navigator) => {
  if (driver.lenght > navigator.lenght) {
    console.log("The driver has the longest name.");
  } else if (driver.lenght < navigator.lenght) {
    console.log("The navigator has the longest name.");
  } else {
    console.log("The driver and the navigator has equally long names.");
  }
};

findLongestName("jennie", "tom");

/*
4) 
to get user input you can use the prompt() and then store that into a variable.
Such as 
let userAge = prompt('How old are you?')
Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
alert('wow you are 33! that's young!')
or alert('23! Younger than Zlatan') or something like that.
Add as many conditonals as you want.
*/

const calculateAge = (userAge) => {
  userAge = prompt('How old are you?');
  let age = parseInt(userAge);
  if (age >= 40) {
    alert(`Wow, you are ${age}? That is really old! I'm so sad for you.`)
  } else if (userAge < 40) {
    alert(`Wow, you are ${age}? You have your whole life in front of you!`)
  } else if (age < 0) {
    alert(`Wow, you are ${age}? How is that even possible? And you can already write! Impressive`)
  }
  return (age);
};

console.log(calculateAge());
/*
5)
In this function we want to give the user a mathematical calculation to 
give us the answer to. Something like prompt('What is 5 + 6?')  
If the answer is correct, congratulate the user. 'Yay! Correct'
If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
You choose if to use addition, subtraction, multiplication or division. 
*/
const showMathSkills = () => {
  let a = 5;
  let b = 6;
  let addition = a + b;
  let giveMathProblem = prompt(`What is ${a} + ${b}?`);
  if (parseInt(giveMathProblem) === addition) {
    alert(`Yay! Correct`);
  } else {
    alert(`Sigh... That is just...wrong. Shame on you! It's 11.`);
  }
  return (showMathSkills);
};

showMathSkills();

/*
6) **BONUS**
Make the calculation machine we just made show random calculations everytime you invoke the function.
But hey, maybe limit the randomness to be numbers between 0-10?
*/
