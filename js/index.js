
//处理图片切换的js操作
$(function(){
	var arr=[["img/11.jpg","出水芙蓉"],["img/21.jpg","含情脉脉"],["img/24.jpg","一枝花"],
	["img/26.jpg","凤求凰"],["img/27.jpg","小靓女一枚"]];
	var num=0;
	var img = $(".img-tab img")[0];
	var oDiv=$(".img-tab").get(0);
	var active = $(".img-ul li");
	var oSpan = $(".btn1");
	var timer = null;
	//搜索
	var oInp = document.getElementById("input");
	var fh = document.getElementById("fh");
	fh.onclick = function(){
		key = encodeURI(oInp.value, "utf8");
        window.open("http://www.baidu.com.cn/s?wd=" + key + "&cl=3","_black");
	}
	clearInterval(timer);
	timer = setInterval(function(){
		if(num>=arr.length){
			num=0;
		}
		img.src=arr[num][0];
		
		img.title=arr[num][1];
		
		active.eq(num).addClass("active").siblings().removeClass("active");
		
		num++;
	},2000);
	oDiv.onmouseover = function(){
		oSpan.css({
			"opacity":"1"
		});
		clearInterval(timer);
	}
	oDiv.onmouseout = function(){
		oSpan.css("opacity","0");
		clearInterval(timer);
		timer = setInterval(function(){
		if(num>=arr.length){
			num=0;
		}
		img.src=arr[num][0];
		
		img.title=arr[num][1];
		
		active.eq(num).addClass("active").siblings().removeClass("active");
		
		num=num+1;
	},2000);
	}
oSpan[0].onclick = function(){
	num=num-1;
	if(num<0){
		num=arr.length-1;
	}
	img.src=arr[num][0];
		
		img.title=arr[num][1];
		
		active.eq(num).addClass("active").siblings().removeClass("active");
}
	
oSpan[1].onclick = function(){
	num=num+1;
	if(num>=arr.length){
		num=0;
	}
	img.src=arr[num][0];
		
		img.title=arr[num][1];
		
		active.eq(num).addClass("active").siblings().removeClass("active");
	
}
$(active).click(function(){
	
	num=$(this).index();
	
	img.src=arr[num][0];
		
		img.title=arr[num][1];
		
		active.eq(num).addClass("active").siblings().removeClass("active");
	
});
	
	
	
})
//实现子网页图片的功能

$(function(){
	
var oLi = $(".middle-imgs-ul li");
oLi.click(function(){
	 window.open("img.html","_black");
	
});

function getClass(opar,oClass){
	
	var arr=[];
	var tag = opar.getElementsByTagName("*");
	var re = new RegExp("\\b"+oClass+"\\b");
	for(var i=0;i<tag.length;i++){
		if(re.test(tag[i].className)){
			arr.push(tag[i]);
		}
		
	}
	return arr;
	
	
	
}
	
	
	
})
