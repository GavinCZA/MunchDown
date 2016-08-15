/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #breakfastbtn */
    $(document).on("click", "#breakfastbtn", function(evt)
    {
        document.location.href="breakfast.html"; 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
