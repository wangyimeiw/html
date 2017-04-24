//获取元素
		var tux=document.getElementsByClassName("tux")[0];
		//定义一个函数组
		var arr=["1px","-209px","-420px"];
	
		var index1=0;
		var fals=true;
		var mid = setInterval(show1,2000);
		/*
		 * 
		 */
		function show1(){
			tux.style.top=arr[index1];
			console.log(index1);
			if(fals){
				down1();
			}
			else{
				up1();
			}
		}
		function up1(){
			index1--;
			if(index1==0){
					fals=true;
			}
		}
		function down1(){
			index1++;
			if(index1==2){
					fals=false;
			}
		}