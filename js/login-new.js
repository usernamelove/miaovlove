if(window.navigator.userAgent.toLowerCase().indexOf("IE")!=-1){
	 window.addEventListener('message', function(ev){
               var ind = -1;
              if(ev.origin =="http://localhost"){
              	imgs.src=ev.data["url"];
              	user.innerHTML=ev.data["username"];
              	var str="";
              	var ar = ev.data["arry"];
              	for(var i=0;i<ar.length;i++){
              		str+="<li><img src='"+ar[i]+"'/></li>";
              	}
              	modalImg.innerHTML=str;
              for(var i=0;i<oLi.length;i++){
              	
              	(function(i){
              		oLi[i].onclick = function(){
              			for(var j=0;j<oLi.length;j++){
              				oLi[j].style.border="1px solid blue";
              			}
              			this.style.border="2px solid red";
              			ind=i;
              			
              		}
              		
              		
              	})(i)
              }
              
              //
              hello.onclick =function(){
              	
              	if(ind!=-1){
              		imgs.src=ev.data["arry"][ind];
              		
              	}
              	
              	
              	
              }
              
              //
              
              
              }
                
            });
}
else{
document.onreadystatechange = function(ev)
    {
        if (document.readyState === 'complete')
        {
			
            window.addEventListener('message', function(ev){
            	var ind = -1;
              if(ev.origin =="http://localhost"){
              	imgs.src=ev.data["url"];
              	user.innerHTML=ev.data["username"];
              	var str="";
              	var ar = ev.data["arry"];
              	for(var i=0;i<ar.length;i++){
              		str+="<li><img src='"+ar[i]+"'/></li>";
              	}
              	modalImg.innerHTML=str;
              for(var i=0;i<oLi.length;i++){
              	
              	(function(i){
              		oLi[i].onclick = function(){
              			for(var j=0;j<oLi.length;j++){
              				oLi[j].style.border="1px solid blue";
              			}
              			this.style.border="2px solid red";
              			ind=i;
              			
              		}
              		
              		
              	})(i)
              }
              
              //
              hello.onclick =function(){
              	
              	if(ind!=-1){
              		imgs.src=ev.data["arry"][ind];
              		
              	}
              	
              	
              	
              }
              
              //
              
              
              }
               
               
            });
        } 
    };	
}
 

	//这块是对音乐进行处理	
	var nm = getClass(document,"nm");
	var mm = getClass(document,"mm");
	//获取图片
		
	var  main = getClass(document,"main")[0];
	
	var imgs = main.getElementsByTagName("img")[0];//用户的图片
	
	var modalImg = getClass(document,"modal-ul")[0];//更换用户背景图片
	
	var oLi = modalImg.getElementsByTagName("li");
	
	var user = document.getElementById("user");//用户名
	
	var hello = document.getElementById("hello");
	
	


	var arr=["music/昔情难追.mp3","music/世事苍茫成云烟.mp3","music/天地孤影任我行.mp3"];
	for(var i=0;i<mm.length;i++){
		(function(i){
			var str="";
			mm[i].onclick = function(){
				alert(i);
				for(var j=0;j<nm.length;j++){
					nm[j].innerHTML="";
				}
			str="<audio  autoplay='autoplay' loop='loop'><source src='"+arr[i]+"' type='audio/mp3'></source></audio>";
			nm[i].innerHTML=str;
			}
		
			
		})(i)
		
	}
	
	//24孝图
	var n=0;
	var arrk=["imgs/孝感动天.jpg","imgs/百里负米.jpg","imgs/芦衣顺母.jpg",
	          "imgs/鹿乳奉亲.jpg","imgs/啮指痛心.jpg","imgs/亲尝汤药.jpg"];
	var oU=getClass(document,"hm");
	var op = getClass(document,"midle-left");
	var ot = op[0].getElementsByTagName("img")[0];
	var ok = oU[0].getElementsByTagName("li");
	var oh = getClass(document,"midle-right");
	var tlp = getClass(document,"tlp")[0];
	var con = getClass(document,"con")[0];
	$.ajax({
					url:"../miaovlove/php/file_tu.php",
					type:"GET",
					data:"",
					success:function(red){
						var data = JSON.parse(red);
						tlp.innerHTML = data[0]["title"];
						con.innerHTML = data[0]["content"];
					},
					err:function(err){
						alert("出错啦");	
					}
				})
				
	for(var r=0;r<ok.length;r++){
		(function(r){
			ok[r].onclick = function(){
				ot.src = arrk[r];
				for(var n=0;n<ok.length;n++){
				ok[n].className="";	
				}
				ok[r].className="acr";
				$.ajax({
					url:"../miaovlove/php/file_tu.php",
					type:"GET",
					data:"",
					success:function(red){
						var data = JSON.parse(red);
						tlp.innerHTML = data[r]["title"];
						con.innerHTML = data[r]["content"];
					},
					err:function(err){
					alert("出错啦");	
					}
				})
				
				
				
				
			}
			
		})(r)
	}
	













//这块是对获取class所风的函数
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
	


