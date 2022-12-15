let ri=document.querySelector("#ri");
let li=document.querySelector("#li");
let image=document.querySelector("#image");


ri.onclick=function () {
    image.src="assets/img/cat.jpg"
}
li.onclick=function () {
    image.src="assets/img/piano.jpg"
}




// preloader

setTimeout(function () {
    $('.loader_bg').fadeToggle();
},1500);