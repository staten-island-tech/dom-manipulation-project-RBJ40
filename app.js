const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelectorAll("li"),
  button: document.querySelectorAll(".button"),
  form: document.querySelectorAll(".form"),
  container: document.querySelectorAll(".container"),
};
DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
});
function addElement(input) {}
const header = document.querySelector("h1");
console.log(header.parentElement);
console.log(DOMSelectors.description);
console.log(DOMSelectors.items);
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});

const item = document.querySelectorAll("li");
const items = Array.from(item);
items.forEach((el) => (el.style.color = "red"));

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.textContent);
  })
);
let album = {
  name: "Abbey Road",
};
DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class="card">${album.name}</div>`
);

function newObject(input) {}

function clearFields() {}

function removeObject() {}
//event listener for form
//get values from form for widget object
//create the card and insert it
//find remove buttons and add event listeners

//const Album = makeAlbum()
//addCard(Album)
//addRemoveButtons

clearFields();
