// JavaScript Document

var list=["iphone 6s","iphone 6plus","乐视电视","华硕笔记本","27寸显示屏","机械键盘","200元手机话费","谢谢参与"];
var index=0;
var time=null;
window.onload=function(){
	var start=document.getElementById("start"),
	    stop=document.getElementById("stop"),
		title=document.getElementById("main").getElementsByTagName("h1")[0];
	start.onclick=function(){
		clearInterval(time);
		var r;
		time=setInterval(function(){
			r=Math.floor(Math.random()*list.length);
			title.innerHTML=list[r];
			},50);
		this.disabled="disabled";
		stop.disabled=null;
		}
	stop.onclick=function(){
		clearInterval(time);
		start.disabled=null;
		index++;
		var now=new Date();
		var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		var mydate=now.getFullYear()+"年"+(now.getMonth()+1)+"月"+now.getDate()+"日 "+weekday[now.getDay()]+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
		var Lotterylist=document.getElementById("Lotterylist");
		Lotterylist.innerHTML=Lotterylist.innerHTML+"<td>"+index+"</td><td>"+title.innerHTML+"</td><td>"+mydate+"</td>";
		document.getElementById("list").getElementsByTagName("table")[0].style.display="block";
		this.disabled="disabled";
		}
	
	}