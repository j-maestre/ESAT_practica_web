let ee_drag = false;
let currentEE = 0;

if(localStorage.getItem("ee_drag")){
  ee_drag = localStorage.getItem("ee_drag");
}

if(localStorage.getItem("currentEE")){
  currentEE = localStorage.getItem("currentEE");
}

let img = document.getElementById("carrousel_img_principal");



document.getElementById("carrousel_img_principal").addEventListener("drag", function (event) {
  // console.log("Draw");
}, false);

document.getElementById("carrousel_img_principal").addEventListener("dragstart", function (event) {
  // store a ref. on the dragged elem
  // console.log("Draw Start");
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);




document.getElementById("carrousel_img_principal").addEventListener("dragend", function (event) {
  // reset the transparency
  console.log("Draw End");
  event.target.style.opacity = "";
  if(!ee_drag){
    ShowModal("Has encontrado un Easter Egg!");
    currentEE++;
    ee_drag = true;
    localStorage.setItem("ee_drag",true);
    localStorage.setItem("currentEE",currentEE);
    setTimeout(ShowTotalEE,2000);
    // ShowTotalEE();
  }
}, false);