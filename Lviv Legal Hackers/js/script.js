function myFunction(x) {
if (x.matches) { 
     $("#navbar-collapse-items").addClass("collaps-items-set-middle");
     
}
}
     var x = window.matchMedia("(max-width: 990px)")
     myFunction(x) 
     x.addListener(myFunction) 