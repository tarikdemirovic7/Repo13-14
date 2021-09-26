var items = document.getElementsByClassName("item");
var title = document.getElementsByClassName("title");
var modal = document.getElementById("modal");
var iframe = document.getElementById("frame");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", mouseOver);
  items[i].addEventListener("mouseout", mouseOut);
}

for (var i = 0; i < title.length; i++) {
  title[i].addEventListener("click", openModal);
}

function mouseOver() {
  this.children[1].style.display = "block";
}

function mouseOut() {
  this.children[1].style.display = "none";
}

function openModal() {
  const externalHtml = `image${this.id}.html`;
  frame.src = externalHtml;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

frame.onload = function () {
  frame.style.height = frame.contentWindow.document.body.scrollHeight + "px";
};
