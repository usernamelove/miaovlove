$(function(){
	
	var oA = $(".panel-body")[0].getElementsByTagName("a");
	var username = $("#username");
	var pass= $("#password");
	var oUl = $(".modal-ul")[0];
	var hello = document.getElementById("hello");
	var arr=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg",
	     "img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg",
	     "img/9.jpg","img/10.jpg","img/11.jpg","img/12.jpg",
	     "img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg",
	     "img/17.jpg","img/18.jpg","img/19.jpg","img/20.jpg",
	     "img/21.jpg","img/22.jpg","img/23.jpg","img/24.jpg",
	      "img/25.jpg","img/26.jpg","img/27.jpg","img/28.jpg",
	      "img/29.jpg","img/30.jpg"];
	var oLi = oUl.getElementsByTagName("li");
	var main =document.getElementById("main");
	var arrp=[];
	var hp = getClass(document,"hp");
	//用户名验证
	username.focus();
	username.blur(function(){
		$.ajax({
			url:"../miaovlove/php/loginusername.php",
			type:"POST",
			data:{
				"username":username.val()
			},
			success:function(res){
				var data = JSON.parse(res);
				if(data["code"]==2){
					hp[0].style.display="none";
				head();
				}
				else{
					if(data["code"]==0){
					hp[0].innerHTML=data["msg"];
					hp[0].style.display="block";
					username.focus();
					
					}
					else if(data["code"]==1){
					hp[0].innerHTML=data["msg"];
					hp[0].style.display="block";
					username.focus();
					}
				}
			},
			err:function(err){
				alert("出错啦");
			}
			
		})
		
		
	})
	
	//密码验证
	function head(){
		pass.focus();
	pass.blur(function(){
		$.ajax({
			url:"../miaovlove/php/loginpassword.php",
			type:"POST",
			data:{
				"password":pass.val()
			},
			success:function(res){
				var data = JSON.parse(res);
				if(data["code"]==2){
					hp[1].style.display="none";
						main.onclick = function(){
		           var str="";
		          var index=0;
		for(var i=0;i<arr.length;i++){
			str+="<li><img src='"+arr[i]+"'></li>";
		}
		oUl.innerHTML = str;
		this.setAttribute("data-target","#modal");
		for(var i=0;i<oLi.length;i++ ){
			
			(function(i){
				oLi[i].onclick = function(){
					for(var j=0;j<oLi.length;j++){
						oLi[j].style.cssText="border:1px solid blue;box-shadow:0px 0px 0px 0px transparent";
					}
					index=i;
					this.style.cssText="border:1px solid red; box-shadow:0px 0px 2px 2px red;";
					
				}
				
			})(i)
			
		}
		hello.onclick = function(){
			var newWindow = window.open("login-new.html","_black");
			
		    newWindow.onload = function(ev){
				newWindow.postMessage({
					"url":arr[index],
					"username":username.val(),
					"arry":arr
					
				},"http://localhost/miaovlove/login-new.html");
			}
		 }
	}
	
	
				}
				else{
					if(data["code"]==0){
					hp[1].innerHTML=data["msg"];
					hp[1].style.display="block";
					pass.focus();
					}
					else if(data["code"]==1){
					hp[1].innerHTML=data["msg"];
					hp[1].style.display="block";	
					pass.focus();
					}
				}
			},
			err:function(err){
				alert("出错啦");
			}
			
		})
		
	})
	
	
	}
		
	
	
	function getClass(opar,oClass){
		
		var arr=[];
		var re = new RegExp("\\b"+oClass+"\\b");
		var head = opar.getElementsByTagName("*");
		
		for(var i=0;i<head.length;i++){
			if(re.test(head[i].className)){
				arr.push(head[i]);
			}
		}
		
		
		return arr;
		
	}
})
