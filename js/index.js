$(document).ready( function() { 
    $("#center-header").hide();    
    $('body').layout({
        east__initHidden:true,
        //west__initHidden:true,
        south__initHidden:true,
        //north__initHidden:true,
        north__size:55,
        north__resizable:false,
        west__size:240,
        // RESIZE Accordion widget when panes resize
        west__onresize:$.layout.callbacks.resizePaneAccordions
    });
    // ACCORDION - in the West pane
    $("#accordion").accordion({
        heightStyle:	"fill"
    });

    $(document).on("click", "body a", function() {
        var clickedId = $(this).attr("id");
        var clickedLink = $(this).text(); 
        $("#center-header").empty().append(clickedLink).show();
        loadPartials("partials/_" + clickedId + ".html","center-content");
    });
});

function loadPartials(file,element) {
    $("#" + element).empty();
    $.get(file,function(data){
        $("#" + element).append(data);
        //bulma-carousel plugin;
        var carousels = bulmaCarousel.attach();
    });
}