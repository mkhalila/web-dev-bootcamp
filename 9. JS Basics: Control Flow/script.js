var age = Number(prompt("What is your age?"));
// else if (age < 18)
//   console.log("You cannot enter the venue");
// else if (age < 21)
//   console.log("You can enter but cannot drink");
// else
//   console.log("You can enter and drink")
if (age < 0)
  console.log("Come back once you're out of the womb");

if (age == 21)
  console.log("Happy 21st birthday!");

if (age % 2 !== 0)
  console.log("Your age is odd!");
  
if (age % Math.sqrt(age) === 0)
  console.log("Your age is a perfect square!");
