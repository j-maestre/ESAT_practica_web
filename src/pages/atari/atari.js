let ee_footer_bool = false;
let currentEE = 0;
if(localStorage.getItem("ee_footer")){
    ee_footer_bool = localStorage.getItem("ee_footer");
}

if (localStorage.getItem("currentEE")){
    currentEE = localStorage.getItem("currentEE");
}

let ee_footer = document.getElementById("ee_footer");


console.log("Antes");
console.log(ee_footer_bool)
if(localStorage.getItem("ee_footer")){
    ee_footer_bool = localStorage.getItem("ee_footer");
    ee_footer.style.display = "none";
}
console.log(ee_footer_bool)




ee_footer.onclick = () => {
    if(!ee_footer_bool)ShowModal("Has encontrado un Easter Egg!");
    ee_footer_bool = false;
    ee_footer.style.display = "none";
    currentEE++;
    localStorage.setItem("ee_footer",true);
    localStorage.setItem("currentEE",currentEE);
    ShowTotalEE();
}