
  window.onload = function(){
  	

class Magnifier{//放大镜的面向对象
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
		
			
			
			/*$(".main_Commoditydgong1a").mouseover(function(){//鼠标移入小图，切换中、大图的背景图
				console.log(1)
				$(this).css("borderColor","green")
				//console.log(1)
				$(".first_pic img").attr("src",$(this).attr("src"))
				$(".lll_inner img").attr("src",$(this).attr("src"))
				//console.log($(this).attr("src"))
			})*/
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
  }