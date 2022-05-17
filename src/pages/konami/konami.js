let up1 = false;
let up2 = false;

let down1 = false;
let down2 = false;

let left1 = false;
let right1 = false;

let left2 = false;
let right2 = false;

let b = false;
let a = false;

let enter = false;

let completed = false;

let currentEE = 0;

if(localStorage.getItem("completed")){
    completed = localStorage.getItem("completed");
}

if(localStorage.getItem("currentEE")){
    currentEE = localStorage.getItem("currentEE");
}

let fallo = () =>{
    up1 = false;
    up2 = false;
    down1 = false;
    down2 = false;
    left1 = false;
    right1 = false;
    left2 = false;
    right2 = false;
    b = false;
    a = false;
    enter = false;
}

document.addEventListener('keydown', function (event) {
    // console.log(event);
    switch(event.key){
        case "ArrowUp":
            if(up1 && !up2){
                up2 = true;
            }else if(!up1 && !up2){
                up1 = true;
            }else if(up1 && up2){
                fallo();
            }
        break;
        case "ArrowDown":
            if(up1 && up2){
                if(down1 && !down2){
                    down2 = true;
                }else if(!down1 && !down2){
                    down1 = true;
                }else if(down1 && down2){
                    fallo();
                }
            }else{
                fallo();
            }
        break;
        case "ArrowLeft":
            if(down1 && down2){

                if(!left1){
                    left1 = true;
                }else if(left1 && !right1){
                    fallo();
                }else if(left1 && right1){
                    left2 = true;
                }
            }
        break;
        case "ArrowRight":
            if(left1 && !right1){
                right1 = true;
            }else if(left1 && right1 && !left2){
                fallo();
            }else if(left1 && right1 && left2 && !right2){
                right2 = true;
            }else{
                fallo();
            }
        break;

        case "b":
            if(right2){
                if(!b){
                    b = true;
                }else{
                    fallo();
                }
            }
        break;

        case "a":
            if(b){
                if(!a){
                    a = true;
                }else{
                    fallo();
                }
            }else{
                fallo();
            }
        break;

        case "Enter":
            if(a){
                if(!enter){
                    enter = true;
                }else{
                    //Me da igual porque ya he acabado
                }
            }else{
                fallo();
            }
        break;

        default:
            fallo();
        break;
    }

    


    if(enter){
        if(!completed){
            ShowModal("Has encontrado el Easter Egg de Konami!");
            completed = true;
            localStorage.setItem("completed",true);
            currentEE++;
            localStorage.setItem("currentEE",currentEE);
            setTimeout(ShowTotalEE, 2000);
        }
        fallo();
    }

    //First up
    // if (event.key == 'ArrowUp') {
    //     if(up1 && !up2){
    //         up2 = true;
    //     }else{
    //         up1 = false;
    //         up2 = false;
    //     }
    //     if (!up1)up1 = true;
    // }

    // if(up1 && up2)console.log("Pa arriba OK");

    // //First down
    // if(up1 && up2){

    //     if (event.key == 'ArrowDown') {
    //         if (down1 && !down2){
    //             down2 = true;
    //         }else{
    //             down1 = false;
    //             down2 = false;
    //         }
    //         if (!down1)down1 = true;
    //     }
        
    //     if (down1 && down2)console.log("Pa abajo OK");
        
    //     if(up1 && up2 && down1 && down2){
    //         console.log("LAS 4 OK");
    //     }
    // }
    
    
});

