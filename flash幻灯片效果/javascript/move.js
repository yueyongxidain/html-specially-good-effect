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
function starMove(obj,attr,itarget)
{
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			if(attr=='opacity')
			{
				var iCur=parseInt(parseFloat(getstyle(obj,attr))*100);	
			}
			else
			{
				var iCur=parseInt(getstyle(obj,attr));	
			}
			var ispeed=(itarget-iCur)/8;
			ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
			if(iCur==itarget)
			{
				obj.style[attr]=itarget+'px';
				clearInterval(obj.timer);
			}
			else
			{
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
		},30);
	
		
}