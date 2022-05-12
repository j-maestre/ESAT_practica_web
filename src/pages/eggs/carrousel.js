let img = document.getElementById("carrousel_img_principal");

console.log(img);


document.getElementById("carrousel_img_principal").addEventListener("drag", function (event) {
  console.log("Draw");
}, false);

document.getElementById("carrousel_img_principal").addEventListener("dragstart", function (event) {
  // store a ref. on the dragged elem
  console.log("Draw Start");
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.getElementById("carrousel_img_principal").addEventListener("dragend", function (event) {
  // reset the transparency
  console.log("Draw End");
  event.target.style.opacity = "";
  alert("Has encontrado un easter egg");
}, false);