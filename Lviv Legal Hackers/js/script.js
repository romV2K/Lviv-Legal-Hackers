function myFunction(x) {
if (x.matches) { 
     $("#navbar-collapse-items").addClass("collaps-items-set-middle");
     // $(".nav-link").css("color","black");
}
}
   var x = window.matchMedia("(max-width: 990px)")
   myFunction(x) // Call listener function at run time
   x.addListener(myFunction) // Attach listener function on state changes