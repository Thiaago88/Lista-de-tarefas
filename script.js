let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessInput = document.getElementById("guessInput");
let guessButton = document.getElementById("guessButton");
let result = document.getElementById("result");

guessButton.addEventListener("click", function () {
  checkGuess();
});

guessInput.addEventListener("keypress", function (tecla) {
  if (tecla.key === "Enter") {
    checkGuess();
  }
});

function checkGuess() {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    result.innerHTML = "Por favor, insira um número válido.";
    return;
  }

  if (guess < randomNumber) {
    result.innerHTML = "O número é maior.";
  } else if (guess > randomNumber) {
    result.innerHTML = "O número é menor.";
  } else {
    result.innerHTML = "Parabéns, você acertou!";
  }
}
