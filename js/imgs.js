$(function(){
	var js = document.getElementById("json");
	var oInp = js.getElementsByTagName("input");
	var modal = document.getElementById("modal");
	var btn = modal.getElementsByTagName("a");
	var oUl = document.getElementById("panel");
	var target = document.getElementById("target");
	var mm = document.getElementById("mm");
    var oA=oUl.getElementsByTagName("a");

	//当点击查看更多时所触发的事件处理
	target.onclick = function(){
		$.ajax({
		url:"../miaovlove/php/imgs.php",
		type:"POST",
		data:'',
		success:function(res){
			var data=JSON.parse(res);
			var str="";
			for(var i=0;i<data.length;i++){
				//str+="<li class='list-group-item'>"+data[i]['username']+":"+data[i]['content']+"</li>";
				
				str+="<li class='list-group-item'>"+
					data[i]['username']+":"+data[i]['content']+"</li>";
			}
			mm.innerHTML = str;
		},
		err:function(err){
			alert("获取数据失败");
		}
		
	})
		
		
	}
	//当页面进行加载时，对数据的加载
	$.ajax({
		url:"../miaovlove/php/imgs.php",
		type:"POST",
		data:'',
		success:function(res){
			//alert(res);
			var data=JSON.parse(res);
		     
			var str="";
			for(var i=0;i<data.length;i++){
			//str+="<li class='list-group-item'>"+data[i]['username']+":"+data[i]['content']+"</li>";
			str+="<li class='list-group-item'>"+data[i]['username']+":"+data[i]['content']+
					"</li>";
			
			
			}
			oUl.innerHTML = str;
			
			for(var i=0;i<oA.length;i++){
				
				(function(i){
					
					oA[i].onclick = function(){

						$.ajax({
							url:"../miaovlove/php/imgs.php",
							type:"POST",
							data:{
								"name":i
							},
							success:function(res){
								alert(res);
								var data = JSON.parse(res);
									var qq="";
									for(var i=0;i<data.length;i++){
										qq+="<li class='list-group-item'>"+
					data[i]['username']+":"+data[i]['content']+
					"</li>";
									}
									oUl.innerHTML = qq;
									
								
								
							},
							err:function(err){
								alert("出错啦");
							}
						})
					}
					
				})(i)
				
			}
			
		},
		err:function(err){
			alert("获取数据失败");
		}
		
	})
	
	
	//这块用于删除数据
	

	
	
	
//评论后对数据进行处理
	btn[0].onclick = function(){
	if(oInp[0].value!=""&&oInp[1].value!=""){
		$.ajax({
			url:"../miaovlove/php/imgs.php",
			type:"POST",
			data:{
				"username":$("#username").val(),
				"content":$("#content").val()
			},
			success:function(res){
				var data = JSON.parse(res);
				var str="";
				for(var i=0;i<data.length;i++){
					str+="<li class='list-group-item'>"+
					data[i]['username']+":"+data[i]['content']+
					"</li>";
					
				}
				oUl.innerHTML=str;
				oInp[0].value="";
		        oInp[1].value="";
			},
			err:function(err){
				alert("出错了");
			}
		})
	
			this.setAttribute("data-dismiss","modal");
	}
	else{
		this.setAttribute("data-dismiss","");
	}
		
	}
	btn[1].onclick = function(){
		
		oInp[0].value="";
		oInp[1].value="";
		
	}
})

//这块处理file.php的数据
$(function(){
	var oDiv = $(".right-span")[0];
	var kop = $(".right-span")[0];
	var oLi = $(".middle-ul li");
	
	var oImg = $(".left")[0];
	var head = false;
	var oA = oImg.getElementsByTagName("img")[0];
	
	
	
	 $.ajax({
    	url:"../miaovlove/php/file.php",
    	data:"",
    	type:"GET",
    	success:function(data){
    		var data = JSON.parse(data);
    		kop.innerHTML = data[0]["content"];
    	},
    	err:function(err){
    		alert("出错了，请大家原谅下下");
    		
    	}
    })
   
for(var i=0;i<oLi.length;i++){
	
	(function(i){
		
	oLi[i].onclick = function(){
		var src = this.getElementsByTagName("img")[0].getAttribute("src");
		var title = this.getElementsByTagName("img")[0].getAttribute("title");
		oA.src=src;
		oA.title =title;
		
		 $.ajax({
    	url:"../miaovlove/php/file.php",
    	data:"",
    	type:"GET",
    	success:function(data){
    		var data = JSON.parse(data);
    		kop.innerHTML = data[i]["content"];
    	},
    	err:function(err){
    		alert("出错了，请大家原谅下下");
    		
    	}
    })
	}
		
	})(i)
	
	
}
	

})


