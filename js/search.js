



//SEARCHING PHOTOS IN REAL TIME

$(document).ready(function(){
    $("#filter").keyup(function(){
 
        // Retrieve the input field text
           var filter = $(this).val();
 
        // Loop through the gallery
            $(".gallery a").each(function(){
 
        // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
        // Show the list sliding down if searc is a match
            } else {
              $(this).slideDown(1000);
              
              
              
                
            }
        });
 
        
    });
});




