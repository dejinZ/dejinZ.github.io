$(function(){
	var onoff = true
	
	new Vue({
		el:'#search',
		data:{
			bodyText:'',
			val:''
		},
		watch:{
			val(val1,val2){
				this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
					params:{
						wd:this.val
					},
					jsonp:'cb'
				}).then(function(data){
					this.bodyText = JSON.parse(data.bodyText).s
				})
			}
		}
	})
	
	$("#inp").on('focus',function(){
		$(".inpUl").eq(0).css("display",'block');
	})
	
	$("#inp").on('blur',function(){
		if(onoff){
			$(".inpUl").eq(0).css("display",'none');
		}
	})
	
	$(".inpUl").eq(0).on('mouseover',function(){
		onoff = false;
	})
	
	$(".inpUl").eq(0).on('mouseout',function(){
		onoff = true;
		$("#inp")[0].focus();//给输入框一个焦点，点击才能失去焦点
		
	})
})