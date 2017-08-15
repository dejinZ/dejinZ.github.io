 $(function(){
 	$(".Hblack").hover(function(){
	 	$(this).css("color","#f2170b")
	 },function(){
	 	$(this).css("color","#262626")
	 });
	 
	$(".Hgray").hover(function(){
		$(this).css("color","#f2170b")
	},function(){
		$(this).css("color","#808080")
	})
	
	$(".Hwhite").hover(function(){
		$(this).css("color","#f2170b")
	},function(){
		$(this).css("color","#b3b3b3")
	})
	
	$(".Hwblack").hover(function(){
		$(this).css("color","#262626")
	},function(){
		$(this).css("color","#b3b3b3")
	})
	
	$(".secMore").hover(function(){
		$(this).addClass("secMoreHv")
	},function(){
		$(this).removeClass("secMoreHv");
		$(this).addClass("secMore")
	})
 })
 	