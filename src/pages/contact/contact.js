console.log("%c ", "background: black; padding: 1000000px;");


document.getElementById("esat_ee").style.display = "none"
function Codigo(code = ""){
    if(code == "RESPONSIVE"){

        document.getElementById("contact_container").style.display = "none";
        document.getElementById("footer").style.display = "none";
        document.getElementById("esat_ee").style.display = "block";
        console.log("%c Ole los caracoles", "background: green; padding: 100px;");
    }else{
        console.log("%c Creo que se te ha olvidado algo...", "background: red; padding: 100px;");
    }
}
