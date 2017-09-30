// JavaScript Document
//准确获取标签样式
function getstyle(obj,attr)
{
		if(obj.currentStyle)
		{
			return obj.currentStyle[attr];	
		}
		else
		{
			return getComputedStyle(obj,false)[attr];
		}
}
//移动 框架
function starMove(obj,json,fn)
{
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var Stop=true;
			for(attr in json)
			{
				if(attr=='opacity')
				{
					var iCur=parseInt(parseFloat(getstyle(obj,attr))*100);	
				}
				else
				{
					var iCur=parseInt(getstyle(obj,attr));	
				}
				var ispeed=(json[attr]-iCur)/8;
				ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
				if(Math.abs(iCur-json[attr])>1)
				{
					Stop=false;
					
					
					if(attr=='opacity')
					{
						obj.style.filter='alpha(opacity:'+(iCur+ispeed)+')';	
						obj.style.opacity=(iCur+ispeed)/100;
					}
					else
					{
						obj.style[attr]=iCur+ispeed+'px';
					}
					
				}
			}
			if(Stop===true)
			{
					clearInterval(obj.timer);	
					if(fn)
					{
						fn();	
					}
			}
		},30);
	
		
}