const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelectorAll("ul"),
  button: document.querySelectorAll("button"),
  form: document.querySelectorAll(".form"),
  container: document.querySelectorAll(".container"),
  card: document.querySelector(".card"),
};
DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event.target.parentElement);
});
function addElement(input) {}
const header = document.querySelector("h1");
console.log(header.parentElement);
console.log(DOMSelectors.description);
console.log(DOMSelectors.items);
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const imgLinkInput = document.querySelector(".imgLink");
  console.log(document.querySelector("input").value);
  let input = DOMSelectors.input.value;
  console.log(input);
  const removeButton = DOMSelectors.container.querySelector(
    ".card:last-child .removeButton"
  );
  removeButton.addEventListener("click", function () {
    const card = removeButton.parentElement;
    DOMSelectors.container.removeChild(card);
  });
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
DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class="card">
  <img id="card-img" src="${imgLink}</div>`
);

function newObject(input) {
  document.createElement("img");
}

function removeObject() {
  parent.removeChild(child);
}
clearFields();
