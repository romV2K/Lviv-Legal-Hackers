function myFunction(x) {
if (x.matches) { 
     $("#navbar-collapse-items").addClass("collaps-items-set-middle");
     
}
}
     var x = window.matchMedia("(max-width: 990px)")
     myFunction(x) 
     x.addListener(myFunction) 


// var $img = $('lviv-photo');

// $img.load(function(){
//     // удаляем атрибуты width и height
//      $(this).removeAttr("width")
//           .removeAttr("height")
//           .css({ width: "", height: "" });

//     // получаем заветные цифры
// var width  = $(this).width();
// var height = $(this).height();

// });
// showImgWH();
// console.log('width= '+width(), 'height= '+height())


let imgW;
let imgH;
function findWH(){
     imgW=document.querySelector('#lviv-photo').naturalWidth;
     imgH=document.querySelector('#lviv-photo').naturalHeight;
     console.log('width='+imgW, 'height='+ imgH)
     $('.photo-lviv-legal-hackers').css({'height': imgH })
}
findWH();