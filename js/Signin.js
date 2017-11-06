

$(function(){
	
	
function Head(){
	
	this.init();
}

Head.prototype.init = function(){
	
	
	$(".box1").click(function(){
		
		$(".main_inner2").css({
			display:"block"
		})
		
		$(".main_inner3").css({
			display:"none"
		})
		
		$(".box1").css({
			borderBottom:"1px solid rgb(51, 203, 152)",
			color:"#000"
		})
		
		$(".box2").css({
			borderBottom:"1px solid rgb(221, 221, 221)",
			color:"#999999"
		})
	})
	
	$(".box2").click(function(){
		
		$(".main_inner3").css({
			display:"block"
		})
		
		$(".main_inner2").css({
			display:"none"
		})
		
		$(".box2").css({
			borderBottom:"1px solid rgb(51, 203, 152)",
			color:"#000"
		})
		
		$(".box1").css({
			borderBottom:"1px solid rgb(221, 221, 221)",
			color:"#999999"
		})
	})
	









	var user = $("#user").val()
	var password = $("#pass").val()

	$(".logon1>a").click(function(){
		
	

		$.ajax({
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				type:"POST",
				data:{
					status:"login",
					userID:user,
					password:password
				},
				success:function(res){
					//成功之后做什么;
					switch(res){

						case "0" : alert("用户不存在,请注册");
						break;
						
						case "2": alert("用户名和密码不符!!");
						break;

						default:alert("登陆成功,我们稍微将为您跳转到购物页面");

						//console.log(res);
						setTimeout(function(){
							location.href="http://www.epet.com"
						},2000)

					}


				},
				error:function(){

					alert("你特么把我服务器用坏了! 赔钱!")

				}

			})
})	
}

new Head()











})