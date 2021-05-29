$( function() {
    $("#draggable li").draggable({
        helper: 'clone', 
        containment: 'frame',
        cursor:'grabbing',
        opacity:'0.2'
    });
    // fruit droppable section
    $("#fruits").droppable({
        accept: 'li[data-value="fruit"]',
        drop:function(event,ui){
            $('#fruitSection').append(ui.draggable);
        }
    })
    // Animal droppable section
    $("#animals").droppable({
        accept: 'li[data-value="animal"]',
        drop:function(event,ui){
            $('#animalSection').append(ui.draggable);
        }
    })
});