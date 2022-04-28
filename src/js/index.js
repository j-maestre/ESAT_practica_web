


let home = document.getElementById("home");
let atari = document.getElementById("atari");


home.onclick = () =>{
    Navigate("home");
}
atari.onclick = () =>{
    Navigate("atari");
}


function Navigate(url){
    console.log("Navegacion");
    document.getElementById("currentPage").src ="./pages/"+url+"/"+url+".html";
}