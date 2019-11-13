function middleSet(x) {
if (x.matches) { 
     $("#navbar-collapse-items").addClass("collaps-items-set-middle");
     
}
}

function replaceTag(y){
if(Obj1.outerHTML && Obj2.outerHTML && y.matches) { //if outerHTML is supported
     Obj1.outerHTML=str1; ///it simple replacement of whole element with contents of str var
     Obj2.outerHTML=str2;
}
}


let str1 = '<img class="lviv-photo img-fluid" id="lviv-photo" src="img/lviv2.jpg" alt="">'; //it can be anything
let Obj1 = document.getElementById('video1'); //any element to be fully replaced

let str2 = '<img class="lviv-photo img-fluid" id="lviv-photo" src="img/lviv-alternative.jpg" alt="">'; //it can be anything
let Obj2 = document.getElementById('lviv-photo'); //any element to be fully replaced

let x = window.matchMedia("(max-width: 990px)")
let y = window.matchMedia("(max-width: 420px)")
replaceTag(y)
middleSet(x)  



$('#scroll').on('click', function() {
     $('html,body').animate({scrollTop:$('#partners').offset().top+"px"},{duration:1E3});
});



