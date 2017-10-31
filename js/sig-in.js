$(function(){
	
	var username = $("#username");
	var pass = $("#password");
	var passq = $("#password-true");
	var eamil = $("#eamil");
	var rese = $("#reset");
	var sum = $("#form-a");
	var oDiv = $(".form-group")[0].getElementsByTagName("div");
	var oInp = $(".form-group")[0].getElementsByTagName("input");
	
	//清空填写内容
	rese.get(0).onclick = function(){
		for(var i=0;i<oInp.length;i++){
			$(oInp[i]).blur();
		}
		username.get(0).value="";
		pass.get(0).value="";
		passq.get(0).value="";
		eamil.get(0).value="";
		
		
	}
	
	for(var i=0;i<oInp.length;i++){
		
		(function(i){
			oInp[i].onclick = function(){
				$(oInp[i]).focus();
			}
			
		})(i)
		
	}
	
	//用户名验证
	
	username.focus(function(){
		oDiv[0].style.display="block";
	});
	
	username.blur(function(){
			oDiv[0].style.display="none";
	});
	
	//密码
	pass.focus(function(){
		oDiv[1].style.display="block";
	});
	pass.blur(function(){
			oDiv[1].style.display="none";
	});
	
	
	
	passq.focus(function(){
		
		oDiv[2].style.display="block";
	});
	
	passq.blur(function(){
			oDiv[2].style.display="none";
	})
	eamil.focus(function(){
		oDiv[3].style.display="block";
	})
	
	eamil.blur(function(){
		oDiv[3].style.display="none";
	})
	
	
	
	sum.on("click",function(){
		
		rel();
		
	})
	
	function rel(){
		if(username.val() &&username.val().length>2){
			if(pass.val() && pass.val().length>6 && pass.val().length<12){
				
				if(passq.val()===pass.val()){
					var re = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
					if(re.test(eamil.val())){
						$.ajax({
							url:"../miaovlove/php/sig-in.php",
							type:'POST',
							data:{
								"username":username.val(),
								"password":pass.val(),
								"eamil":eamil.val()
							},
							//这块处理用户名验证
							success:function(res){
								var data = JSON.parse(res);
								if(data["code"]==0){
								username.focus();	
								oDiv[0].style.display="block";
								oDiv[0].innerHTML=data["msg"];
								}
								else if(data['code']==1){
								 window.open("login.html","_black");
									
								}
							},
							err:function(err){
								alert("出错啦");
							}
						})
					}
					else{
					eamil.focus();
			oDiv[3].style.display="block";	
					}
					
				}
				else{
					
				passq.focus();
			oDiv[2].style.display="block";	
				}
				
			}
			else{
				pass.focus();
			oDiv[1].style.display="block";	
			}
			
		}
		else{
				username.focus();
			oDiv[0].style.display="block";	
		
			
		}
		
		
		
		
		
	}
	
	
	
	
	
})

