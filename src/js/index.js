let menuEECont = 0;
let currentEE = 0;

let ee_menu = false;
let ee_secret = false;

let ee_eye = false;
if (localStorage.getItem("ee_eye")) {
    ee_eye = localStorage.getItem("ee_eye");
}
if (localStorage.getItem("ee_secret")) {
    ee_secret = localStorage.getItem("ee_secret");
}
if (localStorage.getItem("ee_menu")) {
    ee_menu = localStorage.getItem("ee_menu");
}

if(localStorage.getItem("currentEE")){
    currentEE = localStorage.getItem("currentEE");
}


let menu = document.getElementById("menuBars");
let eye = document.getElementById("ee_eye");

eye.onclick = () => {
    if(!ee_eye){
        ShowModal("Has encontrado un Easter Egg eye",0);
        ee_eye = true;
        localStorage.setItem("ee_eye",true);
        currentEE++;
        localStorage.setItem("currentEE",currentEE);
        setTimeout(ShowTotalEE,2000);
    }

}
menu.onclick = () => {
    menuEECont++;
    if (menuEECont == 2 && !ee_menu) {
        ShowModal("Has encontrado un easter Egg! menu");
        ee_menu = true;
        localStorage.setItem("ee_menu",true);
        currentEE++;
        localStorage.setItem("currentEE",currentEE);
        setTimeout(ShowTotalEE, 2000);

    }
}


// function ShowModal(text, type = 0) {
//     toastr.options = {
//         "closeButton": true,
//         "debug": false,
//         "newestOnTop": false,
//         "progressBar": true,
//         "positionClass": "toast-top-right",
//         "preventDuplicates": false,
//         "onclick": null,
//         "showDuration": "300",
//         "hideDuration": "1000",
//         "timeOut": "5000",
//         "extendedTimeOut": "1000",
//         "showEasing": "swing",
//         "hideEasing": "linear",
//         "showMethod": "fadeIn",
//         "hideMethod": "fadeOut"
//     }

//     switch(type){
//         case 0: toastr.success(text);break;        
//         case 1: toastr.info(text);break;
    
//     }
// }



// function ShowTotalEE() {
//     ShowModal("Total: " + currentEE + "/" + totalEE,1);
// }

console.log("Escribe-> Secret()");
function Secret() {
    if(!ee_secret){
        ShowModal("Has encontrado un Easter Egg!");
        ee_secret = true;
        currentEE++;
        localStorage.setItem("ee_secret",true);
        localStorage.setItem("currentEE",currentEE);
        setTimeout(ShowTotalEE, 2000);
    }
}


// let home = document.getElementById("home");
// let atari = document.getElementById("atari");


// home.onclick = () =>{
//     Navigate("home");
// }
// atari.onclick = () =>{
//     Navigate("atari");
// }


// function Navigate(url){
//     console.log("Navegacion");
//     document.getElementById("currentPage").src ="./pages/"+url+"/"+url+".html";
// }
