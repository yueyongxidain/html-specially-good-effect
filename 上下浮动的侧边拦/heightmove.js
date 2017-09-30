// JavaScript Document
var timer=null;
function heightmove(id,itarget)
{
		clearInterval(timer);
		timer=setInterval(function(){
		var ispeed=(parseInt(itarget)-id.offsetTop)/8;
		ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
		//id.innerHTML=ispeed+"<br/>";
		if(Math.abs(id.offsetTop-itarget)<1)
		{
			
			clearInterval(timer);	
		}
		else
		{

			id.style.top=id.offsetTop+ispeed+'px';
		}
		
		
	},30);	
}