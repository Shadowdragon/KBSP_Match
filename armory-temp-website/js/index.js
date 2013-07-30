$(document).ready(function(){
        var title = "",
            directed = "",
            paragraph = "",
            creativeDirector = "";

 
 
		$('.fancybox').fancybox();

  		$(".various").fancybox({
   		 	maxWidth  : 800,
    		maxHeight  : 600,
   			fitToView  : false,
    		width    : 'auto',
    		height    : 'auto',
    		autoSize  : false,
    		closeClick  : false,
    		openEffect  : 'none',
    		closeEffect  : 'none'
 		 });

        $('.fancybox-media').on('click', function(){
            title = $(this).data('title');
            directed = $(this).data('directedby');
            creativeDirector = $(this).data('cd');
            paragraph = $(this).data('paragraph');
        });


        $('.fancybox-media').fancybox({
            width: 600,
            height: 338,
            type: 'iframe',
            fitToView : false,

                helpers : {
            title : {
                type : 'outside'
            }
        },
            afterLoad : function(){
                $('.fancybox-outer').append("<div class='description'>" +
                    "<h1>" + title + "</h1><p>" + paragraph + "</p><h2>" + directed + "</h2>" +
                    "<h3>" + creativeDirector + "</h3>" + "</div>");
            }
        });
             $('.fancybox-reel').fancybox({
            width: 600,
            height: 338,
            type: 'iframe',
            fitToView : false
          
        });



 
 });