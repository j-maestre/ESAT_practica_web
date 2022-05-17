console.log("%c ", "background: black; padding: 1000000px;");
let secretCode = "RESPONSIVE";

console.active = false;
document.getElementById("esat_ee").style.display = "none"
function Codigo(code = ""){
    if(code == secretCode){
        document.getElementById("contact_container").style.display = "none";
        document.getElementById("footer").style.display = "none";
        document.getElementById("esat_ee").style.display = "block";
        window['console']['log'] = oldConsoleLog;
        console.log("%c Ole los caracoles", "background: green; padding: 100px;");
        window['console']['log'] = null;
    }else{
        window['console']['log'] = oldConsoleLog;
        console.log("%c Creo que se te ha olvidado algo...", "background: red; padding: 100px;");
        window['console']['log'] = null;
    }
}

let oldConsoleLog = window['console']['log'];
window['console']['log'] = null;
