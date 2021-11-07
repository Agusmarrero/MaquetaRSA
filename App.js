
function msg(){  
    var element = document.getElementById("principal");
    element.className -= " row";
    element.className += " hide";
    var elementSecond = document.getElementById("segundo");
    elementSecond.className -= " hide";
    elementSecond.className += " show";
    var elementNext = document.getElementById("next");
    elementNext.className += " show";
   }  


   function msgStep(){  
    var elementSecond = document.getElementById("tercero");
    elementSecond.className -= " hide";
    elementSecond.className += " show";
    var elementNext = document.getElementById("nextSeg");
    elementNext.className += " show";
   }  

   function crypto(){  
    var elementNext = document.getElementById("cryptoimg");
    elementNext.className += " show";
    elementNext.className += " show";
   }  

