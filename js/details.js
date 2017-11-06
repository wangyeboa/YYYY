

/*class Magnifier{//放大镜的面向对象
		constructor(){
			this.init()
		}
		init(){//绑定事件
			var that = this;
			$(".vvv").mousemove(function(event){//鼠标移入中图
				var evt  = event || window.event
				$(".nnn").css("display","block");//mark出现
				$(".lll_inner").css("display","block");
				$(".ttt1").css("display","none")
				this.left = evt.offsetX - $(".nnn").width()/2;
				this.top = evt.offsetY- $(".nnn").height()/2;
				that.move(this.left,this.top);
			})
			$(".vvv").mouseout(function(){
				$(".nnn").css("display","none");//mark出现
				$(".lll_inner").css("display","none");
				$(".ttt1").css("display","block")
			})
			
			$(".main_Commoditydgong1a>li>a>img").mouseover(function(){//鼠标移入小图，切换中、大图的背景图
				//console.log(1)
				$(this).css("borderColor","green")
				$(".first_pic img").attr("src",$(this).attr("src"))
				$(".lll_inner img").attr("src",$(this).attr("src"))
				console.log($(this).attr("src"))
			})
			$(".changePic li img").mouseout(function(){
				$(this).css("borderColor","white")
			})
		}
		
		move(left,top){//mark和右方的大图开始移动
			var maxLeft = $(".vvv").width() - $(".nnn").width();
			var maxTop =  $(".vvv").height() - $(".nnn").height();
			if(left < 0){
				left = 0
			}
			if(top<0){
				top=0
			}
			if(left > maxLeft){
				left = maxLeft
			}
			if(top >maxTop){
				top = maxTop
			}
			$(".nnn").css({
				"left":left,
				"top":top
			})
			var ProX = left/maxLeft;
			var ProY = top/maxTop ;
			//console.log(left,top)
			
			var BmaxLeft = $(".lll_inner img").width() - $(".lll_inner").width();
			var BmaxHeight = $(".lll_inner img").height() - $(".lll_inner").height();
			$(".lll_inner img").css({
				"marginLeft":-BmaxLeft*ProX,
				"marginTop":-BmaxHeight*ProY
			})		
		}	
	}
		new Magnifier()

*/









 


var acookie=$.cookie("date-id");
console.log(acookie)
$(function(){
	
	function main(){
		this.init()
		this.show()
		this.iNow()
		this.tok()
		
	}
	
	
	
	main.prototype.init = function(){
		$.getJSON("http://127.0.0.1:8020/Econgshangcheng/php/commodity.json")
		.then(function(res){
			
			var html = "";	
				html += `<h1>
							<span>[多件优惠]</span>
							${res[acookie].name}</h1>	
							<span class="name_a">比利时进口 优质原料搭配 全面均衡营养 易吸收</span>
							<div class="name_b">
								<p>市场价 ： <span class="name_b_1">${res[acookie].Pricea}</span></p>
								<p>E宠价 ：<span class="name_b_3">￥</span> 
									<span class="name_b_2">${res[acookie].price}</span></p>
								
							</div>
							
							
									<div class="onrms ">
									<span>多件优惠</span>
									<div class="onrms1">
										<input type="checkbox" >
									买 2 袋，9.5折，单价：￥ 368.60  省：<span>￥ 38.80</span>
									</div>
									</div>`
						
				
			
				$("#QQQ").html(html);	
				
				
				
		})
		
	

	}
	
	
	
	main.prototype.show = function(){
		
		$.getJSON("http://127.0.0.1:8020/Econgshangcheng/php/commodity.json")
		.then(function(res){			
			var iii = "";		
				iii += `		
					<a href="#" class="first_pic">
							<img src="${res[acookie].img}"/>
										</a>
				
				`
			
				$(".main_Commoditydg1").html(iii);							
		})
	}
	
	
	main.prototype.iNow = function(){
		
		$.getJSON("http://127.0.0.1:8020/Econgshangcheng/php/commodity.json")
		.then(function(res){
			
			var iii = "";
				
				iii += `
			
			
											<li>
												<a>
													<img src="${res[acookie].top1}"/>
												</a>
											</li>
											<li>
												<a>
													<img src="${res[acookie].top2}"/>
												</a>
											</li>
				
				`
			
				$(".main_Commoditydgong1a").html(iii);
				
				$(".main_Commoditydgong1a>li>a>img").mouseover(function(){//鼠标移入小图，切换中、大图的背景图
				//console.log(1)
				$(this).parent("a").parent("li").css("borderColor","green")
				$(this).parent("a").parent("li").siblings().css("borderColor","#ddd")
				//console.log(1)
				$(".first_pic img").attr("src",$(this).attr("src"))
				$(".lll_inner img").attr("src",$(this).attr("src"))
				//console.log($(this).attr("src"))
			})					
			
		})
	}
	main.prototype.tok = function(){
		
		$.getJSON("http://127.0.0.1:8020/Econgshangcheng/php/commodity.json")
		.then(function(res){
			
			var html = "";
			
			
				
				html += `<img src="${res[acookie].top1}"/>
			
			
				`
			
				$(".lll_inner").html(html);
						
				
			
			
		})
		
	

	}
	
	
	
	
	
	
	
	
	new main
	
})




