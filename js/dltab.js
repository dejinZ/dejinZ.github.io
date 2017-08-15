$(function(){
	let oTopdl = $(".topdl").find("li");
	let oDlbox = $(".register_box").children("div");
	
	for(var i=0; i<oTopdl.length; i++){
		oTopdl.eq(i).on("click",function(){
			$(this).siblings().removeClass("topdl_dspl");
			$(this).parent().siblings().removeClass("dspl")
			$(this).addClass("topdl_dspl")
			oDlbox.eq($(this).index()).addClass("dspl")
		})
	}
	
	//section-----dlzc*******************************************************
	$('.dlzc').on('click',function(){
		$('.register').css('display','block')
	})
	$('.logOut').on('click',function(){
		$(this).parent().parent().css('display','none')
	})
	
	//section-----sr*******************************************************
	
	
	let mobi = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
	let mai =  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	let passw = /^[a-zA-Z0-9]{6,20}$/;
	let qquser = /^[1-9][0-9]{4,14}$/
	let userarr = ["支持手机号和邮箱登录","手机/邮箱","用户名格式错误"]
	let qqarr = ["支持QQ账号/邮箱登录","QQ账号/邮箱登录","用户名格式错误"]
	let paswarr = ["建议至少使用两种字符组合","密码","密码格式错误"]
	
	
	verify($(".dlInp").eq(0),$(".inp_span").eq(0),$(".spanTrue").eq(0),mobi,mai,userarr);
	verify($(".dlInp").eq(1),$(".inp_span").eq(1),$(".spanTrue").eq(1),passw,passw,paswarr)
	verify($(".dlInp").eq(2),$(".inp_span").eq(2),$(".spanTrue").eq(2),qquser,mai,qqarr);
	verify($(".dlInp").eq(3),$(".inp_span").eq(3),$(".spanTrue").eq(3),passw,passw,paswarr)
	
	function verify(objinp,objspan,objtrue,varone,vartow,textarr){
		objinp.focus(function(){
			let inpVal = objinp.val()
			if(varone.test(inpVal) || vartow.test(inpVal)){
				objspan.css("display","none")
			}else{
				$(this).attr("placeholder","");
				if(!inpVal){
					objspan.css("display","block")
					$(this).attr("placeholder","");
				}
			}
		})
		
		objinp.blur(function(){
			let inpVal = objinp.val()
			if(varone.test(inpVal) || vartow.test(inpVal)){
				objtrue.css("display","block")
				objspan.css("display","none")
			}else{
				if(!inpVal){
					objspan.html('<span class="spanClass">!</span>'+textarr[0])
					objspan.css("display","block")
					objspan.css("color","#a9a9a9")
					objspan.find("span").css("background","#a9a9a9")
					$(this).attr("placeholder",textarr[1]);
				}else{
					objspan.html('<span class="spanClass">!</span>'+textarr[2])
					objspan.css("color","red")
					objspan.find("span").css("background","red")
					objspan.eq(0).css("display","block")
					objtrue.css("display","none")
				}
			}
			if(!inpVal){
				objspan.css("display","none")
				$(this).attr("placeholder",textarr[1]);
			}
		})
	}
	
})




