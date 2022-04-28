let menuEECont = 0;
let currentEE = 0;
const totalEE = 2;


let menu = document.getElementById("menuBars");
let eye = document.getElementById("ee_eye");

eye.onclick = () => {
    ShowModal("Has encontrado un Easter Egg eye",0);
    ShowTotalEE();

}
menu.onclick = () => {
    menuEECont++;
    if (menuEECont == 2) {
        ShowModal("Has encontrado un easter Egg! menu");
        ShowTotalEE();

    }
}


function ShowModal(text, type = 0) {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    switch(type){
        case 0: toastr.success(text);break;        
        case 1: toastr.info(text);break;
    
    }
    currentEE++;
}



function ShowTotalEE() {
    ShowModal("Total: " + currentEE + "/" + totalEE,1);
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