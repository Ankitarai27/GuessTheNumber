let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkNumber() {
  const input = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const attemptsText = document.getElementById("attempts");

  const userGuess = parseInt(input.value);
  attempts++;

  if (isNaN(userGuess)) {
    message.textContent = "⚠️ Please enter a valid number!";
    return;
  }

  if (userGuess > randomNumber) {
    message.textContent = "📉 Too high! Try a smaller number.";
  } else if (userGuess < randomNumber) {
    message.textContent = "📈 Too low! Try a larger number.";
  } else {
    message.textContent = "🎉 Congratulations! You guessed it right!";
    attemptsText.textContent = `Total attempts: ${attempts}`;
    input.disabled = true;
  }

  input.value = "";
}
