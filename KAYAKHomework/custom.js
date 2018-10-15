$(document).ready(function(){

    $("input[name='vehicle_type']").on("click",function(){

        /******* Set Active / Deactive ********/
        var this_element = $(this);
        var is_checked = $(this_element).prop("checked");
        if(is_checked){
            $(this).parent("label.label_checkbox").addClass("label_active");
        }else{
            $(this).parent("label.label_checkbox").removeClass("label_active");
        }

        /******* Get current active items *******/
        var total_itemt = $("input[name='vehicle_type']").length;
        var selected_count = $("input[name='vehicle_type']:checked").length;
        if(total_itemt == selected_count){
           
            $('input[name="all_select"]').prop('checked', false);
            $('input[name="all_select"]').parent("label.label_checkbox").removeClass("label_active");
        }else{
            
            $('input[name="all_select"]').prop('checked', false);
            $('input[name="all_select"]').parent("label.label_checkbox").removeClass("label_active");
            
        }

    });


    /******* All Select *******/
    $("input[name='all_select']").on("click",function(){

        /******* Set Active / Deactive ********/
        var this_element = $(this);
        var is_checked = $(this_element).prop("checked");
        
        if(is_checked){
            $(this).parent("label.label_checkbox").addClass("label_active");
            $("#moreoptions").multipleSelect("uncheckAll");
            
        }else{
            $(this).parent("label.label_checkbox").removeClass("label_active");
            
        }       
        

        $("input[name='vehicle_type']").parent("label.label_checkbox").removeClass("label_active");
        $("input[name='vehicle_type']").prop('checked', false);
        

    });

    /*** More Options ***/
    $('#moreoptions').multipleSelect({
        selectAll: false
    });
   

});