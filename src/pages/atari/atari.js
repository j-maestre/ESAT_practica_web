let ee_footer_bool = false;

let ee_footer = document.getElementById("ee_footer");

ee_footer.onclick = () => {
    if(!ee_footer_bool)ShowModal("Has encontrado un Easter Egg!");
    ee_footer_bool = false;
    ee_footer.style.display = "none";
}