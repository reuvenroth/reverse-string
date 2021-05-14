reverseString = () => {
  userInput = prompt('Say it in reverse!', 'Reverse your thoughts');
  if (userInput === null) {
    alert("See you next time!");
  }
  else{
    result = alert("Your message reversed is: "
      + userInput.split("").reverse().join(""));
    let newUserInput = confirm("Would you like to reverse another message?");
    if (newUserInput == true) {
      reverseString();
    }
    else {
      alert("See you next time!");
    }
  }
};

reverseString();
