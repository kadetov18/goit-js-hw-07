// task-6.js

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const inputNumber = document.querySelector('#controls input[type="number"]');
  const createBtn = document.querySelector("button[data-create]");
  const destroyBtn = document.querySelector("button[data-destroy]");
  const boxesContainer = document.getElementById("boxes");

  createBtn.addEventListener("click", createBoxes);
  destroyBtn.addEventListener("click", destroyBoxes);

  function createBoxes() {
    const amount = inputNumber.value;
    if (amount < 1 || amount > 100) {
      alert("Please enter a number between 1 and 100.");
      return;
    }

    // Очищаємо вміст контейнера перед створенням нових елементів
    boxesContainer.innerHTML = "";

    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      boxesContainer.appendChild(box);
      size += 10;
    }

    inputNumber.value = "";
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }
});
