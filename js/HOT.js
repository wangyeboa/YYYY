
class init{

		constructor(){
			this.show()
		}

			show(){

				$(".main_10_inner2>a").mouseenter(function(){
					
					$(this).css({
						transform:"scale(0.95)",   //缩放
						transition:"all 1s"		//时间
					})
				})
				
				$(".main_10_inner2>a").mouseleave(function(){
					
					$(this).css({
						transform:"scale(1)",   
						transition:"all 1s"	
					})
				})


			}




	}
	
new init()
