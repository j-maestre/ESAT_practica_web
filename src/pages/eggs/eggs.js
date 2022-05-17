let total = 0;

if(localStorage.getItem("currentEE")){
    total = localStorage.getItem("currentEE")
}

if (total != 6){
    console.log("nanai de la chaina");
    document.getElementById("fourth_wall").style.display = "none";
}else{
    console.log("TODOS completados");
}
console.log("ola?")