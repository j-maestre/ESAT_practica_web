const totalEE = 5;

function ShowTotalEE() {
    ShowModal("Total: " + currentEE + "/" + totalEE, 1);
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

    switch (type) {
        case 0: toastr.success(text); break;
        case 1: toastr.info(text); break;

    }
    // currentEE++;
}



function ShowTotalEE() {
    ShowModal("Total: " + currentEE + "/" + totalEE, 1);
}
