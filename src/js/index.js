let menuEECont = 0;
let currentEE = 0;
const totalEE = 2;



// let menu = document.getElementById("menuBars");
let eye = document.getElementById("ee_eye");

eye.onclick = () => {
    ShowModal("Has encontrado un Easter Egg");
}
// menu.onclick = () => {
//     menuEECont++;
//     if (menuEECont == 11) {
//         ShowModal();
//     }
// }


function ShowModal(text) {
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
    console.log("show modal")
    console.log(toastr);
    toastr.success(text);
    currentEE++;
    ShowTotalEE();
}



function ShowTotalEE() {
    alert("Total EE-> " + currentEE + "/" + totalEE);
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