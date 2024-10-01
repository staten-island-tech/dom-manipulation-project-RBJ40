const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelectorAll("li"),
};
function addElement(input) {}
const header = document.querySelector("h1");
console.log(header.parentElement);
console.log(DOMSelectors.description);
console.log(DOMSelectors.items);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target);
});
