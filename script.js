document.getElementById("lightSwitch").addEventListener("click", toggleLight);
randomiseAnimal();

function toggleLight() {
  document.getElementById("light").classList.toggle("light--on");
}

function toggleAnimal() {
  const isCatHidden = document
    .getElementById("cat")
    .classList.contains("hidden");

  document.getElementById("cat").classList.toggle("hidden");
  document.getElementById("dog").classList.toggle("hidden");

  const animal = isCatHidden ? "dog" : "cat";
  
  setButtonText(animal);
}


function randomiseAnimal() {
  const randomBoolean = Math.random() < 0.5;

  const animalToShow = randomBoolean ? "cat" : "dog";
  const animalToHide = randomBoolean ? "dog" : "cat";

  
  document.getElementById(animalToShow).classList.remove("hidden");
  document.getElementById(animalToHide).classList.add("hidden");
  setButtonText(animalToHide);

}

function setButtonText(newAnimal) {
  const text = document.createTextNode(`I'm more of a ${newAnimal} person`);
  const buttonEl = document.getElementById("animal-toggle");

  while (buttonEl.hasChildNodes()) {
    buttonEl.removeChild(buttonEl.firstChild);
  }

  buttonEl.appendChild(text);
}
