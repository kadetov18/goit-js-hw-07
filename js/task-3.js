// console.log(inputEl);
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
  const eventInput = event.target.value.trim();
  nameOutput.textContent = eventInput || "Anonymous";
});
