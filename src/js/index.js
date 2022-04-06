let menuEECont = 0;
let totalEE = 0;
console.log("OLEeee");

let menu = document.getElementById("menuBars");

menu.onclick = () =>{

    menuEECont++;
    console.log("ole "+menuEECont);
    // Toastify({

    //     text: "This is a toast",
    //     duration: 3000
        
    // }).showToast();
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

    if(menuEECont==11){
        totalEE++;
        ShowTotalEE();
    }
}



function ShowTotalEE(){
    alert("Total EE-> "+totalEE+"/"+1);
}