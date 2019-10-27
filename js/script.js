$(document).ready(function(){
	$(document).on('click','.faq-title',function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).parent().find(".faq-text").slideToggle();
	})

	// Carouse item click 
	$(document).on('click','.type-card .carousel__item',function(e){
		var h = $(this).attr('data-href');
		if(h != 'undefined' && h != ''){
			window.location = h;
		}
	})

	// top bar 
	$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	    if (scroll >= 150) {
	        $(".top-bar").addClass("fixed");
	    } else {
	    	$(".top-bar").removeClass("fixed");
	    }
	});

})