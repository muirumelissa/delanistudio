$(document).ready(function(){
    $('#design_icon').ready(function(){
        $('.para1').hide();
    });
    $('#development').ready(function(){
        $('.para2').hide();
    });
    $('#product').ready(function(){
        $('.para3').hide();
    });
    $('#design_icon').click(function(){
       $('.para1').toggle();
     });

     $('#development').click(function(){
         $('.para2').toggle();
     });

     $('#product').click(function(){
         $('.para3').toggle();
     });
     })
 });

