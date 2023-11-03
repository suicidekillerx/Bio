const buttons = document.querySelectorAll(".card-buttons button"); // Selects all of the card buttons
const sections = document.querySelectorAll(".card-section"); // Selects all of the card sections
const card = document.querySelector(".card"); // Selects the card element

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section"); // Gets the target section for the button
  const section = document.querySelector(targetSection); // Gets the section element itself
  targetSection !== "#about"
    ? card.classList.add("is-active") // Adds the `is-active` class to the card element if the target section is not the "About" section
    : card.classList.remove("is-active"); // Removes the `is-active` class from the card element if the target section is the "About" section
  card.setAttribute("data-state", targetSection); // Sets the `data-state` attribute of the card element to the target section
  sections.forEach((s) => s.classList.remove("is-active")); // Removes the `is-active` class from all of the card sections
  buttons.forEach((b) => b.classList.remove("is-active")); // Removes the `is-active` class from all of the card buttons
  e.target.classList.add("is-active"); // Adds the `is-active` class to the button that was clicked
  section.classList.add("is-active"); // Adds the `is-active` class to the target section
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick); // Creates an event listener for each card button that calls the `handleButtonClick()` function when the button is clicked
});
