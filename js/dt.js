/*
 * 
 * 
 * 首页
 */
//获取
		var mul=document.getElementsByClassName("mul")[0].getElementsByTagName("li");
		var btn_1=document.getElementsByClassName("btn_1");
		var index=0;
		var inu;
		mul[0].style.opacity="1";
		btn_1[0].style.background="red";
		inu=setInterval(show,2000);
		//隐藏
		function yc(){
			for(var i=0;i<mul.length;i++){
				mul[i].style.opacity="0";
			}
			for(var i=0;i<btn_1.length;i++){
				btn_1[i].style.background="rgba(0,0,0,0.5)";
			}
		}
		//单击上一页
		function up(){
			--index;
			if(index<0){
				index=3;
			}
			yc(mul);//全隐藏
			mul[index].style.opacity="1";
			btn_1[index].style.background="red";
			clearInterval(inu);
			inu=setInterval(show,2000);
		}
		//单击下一页
		function down(){
			++index;
			if(index>3){
				index=0;
			}
			yc(mul);//全隐藏
			mul[index].style.opacity="1";
			btn_1[index].style.background="red";
			clearInterval(inu);
			inu=setInterval(show,2000);
		}
		//单击事件
		function btne(inte){
			//清除定时器
			clearInterval(inu);
			yc(mul);//全隐藏
			mul[inte].style.opacity="1";
			btn_1[inte].style.background="red";
			//修改值
			index=inte;
			
			inu=setInterval(show,2000);
		}
		//显示
		function show(){
			yc(mul);//全隐藏
			mul[index].style.opacity="1";
			btn_1[index].style.background="red";
			index++;
			if(index>=4){
				index=0;
			}
		}

/*
 * 
 * 手风琴
 * 
 */
//获取
		var btn=document.getElementsByClassName("zhong_laft_tu1_3");
		//点击单击事件
		
		show2(0);
		function show2(inb){
			//判断
			for(var i=0;i<btn.length;i++){
				btn[i].getElementsByTagName("ul")[0].style.height="0px";
			}
			btn[inb].getElementsByTagName("ul")[0].style.height="145px";
		}