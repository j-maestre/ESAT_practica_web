let total = 0;

if(localStorage.getItem("currentEE")){
    total = localStorage.getItem("currentEE")
}

if (total != 7){
    document.getElementById("fourth_wall").style.display = "none";
}
