// JavaScript Document
window.onload=function()
{
	var odiv=document.getElementById("star");
    var pdiv=document.getElementById("src");
	var op=pdiv.getElementsByTagName("p")[0];
	var oul=odiv.getElementsByTagName("ul")[0];
	var oli=oul.getElementsByTagName("li");
	var psrc=['很差','较差','一般','较好','非常好'];
	var star=0;//记录分数
	var i=0;
	for(i=0;i<oli.length;i++)
	{
		oli[i].index=i;
		oli[i].onmouseover =function()
		{
			for(i=0;i<oli.length;i++)
			{
				oli[i].className='';              //清除上次操作的结果
			}
			for(i=0;i<=this.index;i++)
			{
				oli[i].className='active';
			}
			
		};
		oli[i].onmouseout =function()
		{
			for(i=0;i<oli.length;i++)
			{
				oli[i].className='';              //  //清除上次操作的结果
			}
			if(star>0)
			{
				for(i=0;i<star;i++)
				{
					
					oli[i].className='active';
				}	
			}
			else if(star==0)
			{
				for(i=0;i<oli.length;i++)
				{
					
					oli[i].className='';
				}	
			}	
		};
		oli[i].onclick=function()
		{
			star=(this.index+1);
			op.innerHTML="您打得评分为："+(this.index+1)+"<br/>"+psrc[this.index];
		}
	}
};
