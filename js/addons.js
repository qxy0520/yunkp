$(function(){
	if (window.console) {
		console.info(">>Join us? Email：developer@qietu.com");
	}		
	
	/*触屏*/
		$(".slider .inner").bind("swipeleft",function(){
 			
		});
		
		$(".slider .inner").bind("swiperight",function(){
 			
		});
		
		$(".aside7-in .head em").click(function(){		
	  	$(this).parent().parent().find(".body").toggle();
	  	});
		
		$(".aside7-in .head em").click(function(){
			
			if($(this).hasClass('selected')){								
			$(this).removeClass('selected');
			}else{
			$(this).addClass('selected');
			}
	  	});
		
	  	$('.main6-in .head li').hover(function(){
			$('.main6-in .head li').removeClass('selected');	
			$(this).addClass('selected');	
			
			$('.main6-in .body').hide().eq($(this).index()).show();
		})
		
		$('.mainr .tab span').hover(function(){
			$('.mainr .tab span').removeClass('selected');	
			$(this).addClass('selected');	
			
			$('.mainr .bd').hide().eq($(this).index()).show();
		})
		
		$('.cywk .tab span').hover(function(){
			$('.cywk .tab span').removeClass('selected');	
			$(this).addClass('selected');	
			
			$('.cywk .lists').hide().eq($(this).index()).show();
		})
})