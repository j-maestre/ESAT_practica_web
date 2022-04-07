let menuEECont = 0;
let currentEE = 0;
const totalEE = 2;


let menu = document.getElementById("menuBars");
let eye = document.getElementById("ee_eye");

eye.onclick = () =>{
    ShowModal();
}
menu.onclick = () =>{
    menuEECont++;
    if(menuEECont==11){
        ShowModal();
    }
}


function ShowModal(text){
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
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
      toastr.success('Has encontrado un Easter Egg');
      currentEE++;
      ShowTotalEE();
}



function ShowTotalEE(){
    alert("Total EE-> "+currentEE+"/"+totalEE);
}