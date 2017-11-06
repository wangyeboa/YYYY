	//1、输入框获得焦点时弹出相应的提示信息
		var oUser = document.getElementById("user");
		var oPass = document.getElementById("pass");
		var oRePass = document.getElementById("rePass");
		var oPhone = document.getElementById("phone");
		var oCheckbox = document.getElementById("checkbox")
		var oBtn = document.getElementById("btn");
		var oError1 =document.getElementById("error1") 
		var oCorrect1 = document.getElementById("Correct1")
		var oError2 =document.getElementById("error2") 
		var oCorrect2 = document.getElementById("Correct2")
		var oError3 =document.getElementById("error3") 
		var oCorrect3 = document.getElementById("Correct3")
		var oError4 =document.getElementById("error4") 
		var oCorrect4 = document.getElementById("Correct4")
		var oError5 =document.getElementById("error5") 
		var oCorrect5 = document.getElementById("Correct5")
		var oError6 =document.getElementById("error6") 
		var oCorrect6 = document.getElementById("Correct6")
		
		var oBox5 = document.getElementById("box5_a")
		var oPhoneCode = document.getElementById("phoneCode")
		var oCode = document.getElementById("Code")
		
		var oBox1 = document.getElementById("box5_a1")
		var oBox2 = document.getElementById("box5_a2")
		var oBox3 = document.getElementById("box5_a3")
		var mark = 0;
		
		
		//设置一个时间数组记录每次判断的结果
		var details = [false,false,false,false,false,false]
		
		


	//1、1输入手机号
		//获得焦点显示提示信息
		oPhone.onfocus = function(event){
			var evt = event || window.event;
				oError1.style.display = "none"
				oPhone.style.border = "1px solid #dddddd"
				oCorrect1.style.display = "none";
		}
				//失去焦点时判断是否输入信息，若输入则获取信息并进行判断
				oPhone.onblur = function(event){
					var evt = event || window.event;
					var sPhone = oPhone.value;
					
					if(sPhone == ""){
						oError1.style.display = "block"
						oPhone.style.border = "1px solid #ff6f4a";
						
					}else{
						
						//不为空获取信息进行判断
						var reg = /^1[358][0-9]{9}$/g;
						if(reg.test(sPhone)){
							//符合规则
							oCorrect1.style.display = "block";
							oPhone.style.border = "1px solid #dddddd";
							oPhone.style.color = "#333333";
							details[0] = true;
						}else{
						oError1.style.display = "block"
						oPhone.style.border = "1px solid #ff6f4a"
						oPhone.style.color= "#ff6f4a";
							
							details[0] = false;
						}
					}
				}
				


				//1、2验证码
					//获得焦点提示显示信息
					oCode.onfocus = function(event){
						var evt = event || window.event;
						oError2.style.display = "none"
						oCode.style.border = "1px solid #dddddd"
						oCorrect2.style.display = "none";
						
						if(details[0] != true){//判断上一个没有输入正确内容
						oError1.style.display = "block"
						oPhone.style.border = "1px solid #ff6f4a"
						}
					}
					//失去焦点判断是否填入信息，若填入则进行判断
					oCode.onblur = function(event){
						var evt = event || window.event;
						var sCode = oCode.value;
						if(sCode == ""){
							oError2.style.display = "block"
							oCode.style.border = "1px solid #ff6f4a"
						}else{
							var reg = /^[\w\-\u4e00-\u9fa5]{4}$/g
							
							if(reg.test(sCode)){
								
								oCorrect2.style.display = "block";
								oCode.style.border = "1px solid #dddddd";
								oCode.style.color = "#333333";
								details[1] = true;
								
							}else{
								
								oError2.style.display = "block"
								oCode.style.border = "1px solid #ff6f4a"
							
								details[1] = false;
							
							}
						}
					}
					


					//1、3手机验证码
					//获得焦点提示显示信息
					oPhoneCode.onfocus = function(event){
						var evt = event || window.event;
						oError3.style.display = "none"
						oPhoneCode.style.border = "1px solid #dddddd"
						oCorrect3.style.display = "none";
						
						if(details[0] != true ){//判断上一个没有输入正确内容
						oError1.style.display = "block"
						oPhone.style.border = "1px solid #ff6f4a"
						}
						
					
						
						
						
					}
					//失去焦点判断是否填入信息，若填入则进行判断
					oPhoneCode.onblur = function(event){
						var evt = event || window.event;
						var sPhoneCode = oPhoneCode.value;
						if(sPhoneCode == ""){
							oError3.style.display = "block"
							oPhoneCode.style.border = "1px solid #ff6f4a"
						}else{
							var reg = /^[\w\-\u4e00-\u9fa5]{4}$/g
							
							if(reg.test(sPhoneCode)){
								
								oCorrect3.style.display = "block";
								oPhoneCode.style.border = "1px solid #dddddd";
								oPhoneCode.style.color = "#333333";
								details[2] = true;
								
							}else{
								
								oError3.style.display = "block"
								oPhoneCode.style.border = "1px solid #ff6f4a"
							
								details[2] = false;
							
							}
						}
					}
					
					
			oUser.onfocus = function(event){
			var evt = event || window.event;
						oError4.style.display = "none"
						oUser.style.border = "1px solid #dddddd"
						oCorrect4.style.display = "none";
						
						if(details[0] != true ){//判断上一个没有输入正确内容
						oError1.style.display = "block"
						oPhone.style.border = "1px solid #ff6f4a"
		}
		//失去焦点时提示信息消失，获取输入的信息进行判断，给与用户提示信息
		}
		oUser.onblur = function(event){
			var evt = event || window.event;
			var sUser = oUser.value;
			if(sUser == ""){
				oError4.style.display = "block"
				oUser.style.border = "1px solid #ff6f4a"
			}else{
				var reg = /^[\w\-\u4e00-\u9fa5]{4,20}$/g
				if(reg.test(sUser)){
					//判断成功
					//判断输入的是否是纯数字
					/*var reg1 = /^\d{4,20}$/g*/
					/*if(reg1.test(sUser)){
						//判断是纯数字
						oError4.style.display = "block"
						oUser.style.border = "1px solid #ff6f4a"
					}else{
						//不全是纯数字*/
								oCorrect4.style.display = "block";
								oUser.style.border = "1px solid #dddddd";
								oUser.style.color = "#333333";
								details[3] = true;
					
					details[3] = true;
				}else {
					//判断错误
					oError4.style.display = "block"
					oUser.style.border = "1px solid #ff6f4a"
					details[3] = false;
				}
			}	
		}
		

				
			oPass.onfocus = function(event){
						var evt = event || window.event;
					oBox5.style.display = "block"
					oError5.style.display = "none"
					oPass.style.border = "1px solid #dddddd"
					
				}
			
				
			oPass.oninput = function(event){
					var evt = event || window.event;
					var sPass = oPass.value;
				
				var reg =/^[^\u4e00-\u9fa5]{6,20}$/g
			//				console.log(reg.test(sPass))
						if(reg.test(sPass)){
							//密码符合规则，然后进行密码安全等级判断
							//设置一个mark记录分数,有数字、字母、字符都加一分
							
							//判断是否只有数字
							
							var hasNumber = /[0-9]/g;
							
							if(hasNumber.test(sPass)){
								mark++;
			//						console.log(mark);
							}
							
							//判断是否有字母
							var hasLetter = /[a-z]/gi;
							if(hasLetter.test(sPass)){
								mark++;
			//						console.log(mark);
							}
							//判断是否有字符
							var hasCharacter = /[!@#&\*\.\^\$]/g;
							if(hasCharacter.test(sPass)){
								mark++;
							}
							console.log(mark);
							switch(mark){
								case 1 :
								oBox1.style.background = "#fc9720";
								oBox1.style.color = "#fff";
								
								break;
								case 2:
								oBox2.style.background = "#fc9720";
								oBox2.style.color = "#fff";
								
								break;
								case 3:
								oBox3.style.background = "#fc9720";
								oBox3.style.color = "#fff";
								
							}
			
			
			}
			
			}
			
			
			
				//失去焦点,获取输入框中的内容，判断是否符合规则，给与用户提示信息
				
				oPass.onblur = function(event){
					var evt = event || window.event;
					var sPass = oPass.value;
					
					
					//如果为填入任何信息时失焦则span内容为空
					if(sPass == ""){
						oError5.style.display = "block"
						oPass.style.border = "1px solid #ff6f4a"
						oCorrect5.style.display = "none"
					}else{
						//填入了信息则进行判断
							if(mark > 0){
								oCorrect5.style.display = "block";
								oPass.style.border = "1px solid #dddddd";
								oPass.style.color = "#333333";
								oError5.style.display = "none";
							details[4] = true;
							
							}else{
							//判断失败
						oError5.style.display = "block";
						oPass.style.border = "1px solid #ff6f4a";
							details[4] = false;
						}
					}
				}
				



oRePass.onfocus = function(event){
			var evt = event || window.event;
				oError6.style.display = "none"
				oRePass.style.border = "1px solid #dddddd"
				oCorrect6.style.display = "none";
		}
		//失去焦点判断是否输入信息，若输入信息则进行判断是否符合规则
		oRePass.onblur = function(event){
			var evt = event || window.event;
			//判断是否输入信息
			var sRePass = oRePass.value;
			var sPass = oPass.value;
			
			for(var i = 0 ; i < details.length ; i++){
				
				if(details[i]){
				oBtn.style.background = "#33cb98";
				oBtn.style.color = "#fff";
			}else{
				oBtn.style.background = "#ededed";
				oBtn.style.color = "#fff";
			}
			
		}
			
			
			
			
			if(sRePass == ""){
				//没有输入任何信息
				oError6.style.display = "block"
				oRePass.style.border = "1px solid #ff6f4a"
			}else{
				//获取输入信息，判断是否跟上面信息一致
				if(sRePass == sPass){
					//输入一致
					oCorrect6.style.display = "block";
					oRePass.style.border = "1px solid #dddddd";
					oRePass.style.color = "#333333";
					details[5] = true;
				}else{
					oError6.style.display = "block"
					oRePass.style.border = "1px solid #ff6f4a"
					details[5] = false;
				}
			}
		}
		
		
		
		
		oBtn.onclick = function(event){
			
			var evt = event || window.event;
			for(var i = 0 ; i < details.length ; i++){
					
				if(!details[i]){
					//阻止默认事件
					if(evt.preventDefault){
						evt.preventDefault();
					}else{
						window.event.returnValue = false;
					}
				}
			}
			
			$.ajax({
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					status:"register",
					userID:oUser.value,
					password:oPass.value
				},
				type:"POST"
			})
			.then(function(res){
				switch(res){
						case "0":alert("用户名重名")
						break;
						case "1":alert("注册成功");
						setTimeout(function(){
							location.href="http://127.0.0.1:8020/Econgshangcheng/Signin.html"
						},2000)
						break;
						case "2":alert("注册失败")
						break;
					}
				
					
			
			
		},function(){
			
		})
	}		