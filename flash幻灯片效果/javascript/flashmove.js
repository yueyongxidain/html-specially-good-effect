// JavaScript Document
window.onload=function()
{
	var bDiv=document.getElementById("big");	
	var sDiv=document.getElementById("small");
	var sUl=sDiv.getElementsByTagName("ul")[0];
	var sLi=sUl.getElementsByTagName("li");
	var bUl=bDiv.getElementsByTagName("ul")[0];
	var bLi=bUl.getElementsByTagName("li");
	var oA=bDiv.getElementsByTagName('a');
	var gonext=bDiv.getElementsByTagName('div');
	var i=0;
	var iNow=0;
	for(i=0;i<gonext.length;i++)
	{
		gonext[i].index=i;
		gonext[i].onmouseover=function()
		{
			starMove(gonext[this.index],'opacity',300);
		};
		gonext[i].onmouseout=function()
		{
			starMove(gonext[this.index],'opacity',0);
		};
		gonext[i].onclick=function()
		{
			if(this.className=='make_prevouse')
			{
					starMove(bLi[iNow],'top',390);
					bLi[iNow].style.zIndex=(parseInt(getstyle(bLi[iNow],'zIndex'))+1);
					if(iNow==0)
					{
						iNow=(bLi.length-1);
						bLi[iNow].style.top='0px';
						bLi[iNow].style.zIndex='1';

					}
					else
					{
						iNow--;
					}
					bLi[iNow].style.top='0px';
					bLi[iNow].style.zIndex='1';
					small_move(iNow);

			}
			else
			{
				
					starMove(bLi[iNow],'top',390);
					bLi[iNow].style.zIndex=(parseInt(getstyle(bLi[iNow],'zIndex'))+1);
					if(iNow==(bLi.length-1))
					{
						iNow=0;
						bLi[iNow].style.top='0px';
						bLi[iNow].style.zIndex='1';

					}
					else
					{
						iNow++;
					}
					bLi[iNow].style.top='0px';
					bLi[iNow].style.zIndex='1';
					small_move(iNow);
			}
				
		};
		
	}
	for(i=0;i<sLi.length;i++)
	{
		sLi[i].index=i;
		sLi[i].onclick=function()
		{
			if(this.index>iNow)
			{
					starMove(bLi[iNow],'top',390);
					bLi[iNow].style.zIndex=(parseInt(getstyle(bLi[iNow],'zIndex'))+1);
					if(iNow==(bLi.length-1))
					{
						iNow=0;
						bLi[iNow].style.top='0px';
						bLi[iNow].style.zIndex='1';

					}
					else
					{
						iNow=this.index;
					}
					bLi[iNow].style.top='0px';
					bLi[iNow].style.zIndex='1';
					small_move(iNow);
			}
			if(this.index<iNow)
			{
					starMove(bLi[iNow],'top',390);
					bLi[iNow].style.zIndex=(parseInt(getstyle(bLi[iNow],'zIndex'))+1);
					if(iNow==0)
					{
						iNow=(bLi.length-1);
						bLi[iNow].style.top='0px';
						bLi[iNow].style.zIndex='1';

					}
					else
					{
						iNow=this.index;
					}
					bLi[iNow].style.top='0px';
					bLi[iNow].style.zIndex='1';
					small_move(iNow);
			}
		};
	}
	
	sUl.style.width=sLi.length*(parseInt(getstyle(sLi[0],'width'))+10)+10+'px';
	for(i=0;i<oA.length;i++)
	{
		oA[i].index=i;
		oA[i].onmouseover=function()
		{
			starMove(gonext[this.index],'opacity',60);
		};
		oA[i].onmouseout=function()
		{
			starMove(gonext[this.index],'opacity',0);
		};
	}
function small_move(itarget)
{
	
	if(itarget==0||itarget==1)
	{
		for(i=0;i<sLi.length;i++)
		{
			if(i==itarget)
			{
				sLi[i].style.filter='alpha(opacity:100)';
				sLi[i].style.opacity=1;
			}
			else
			{
				sLi[i].style.filter='alpha(opacity:30)';
				sLi[i].style.opacity=0.3;
			}
		}
		starMove(sUl,'left',0);
	}
	else if(itarget==(sLi.length-1)||itarget==(sLi.length-2))
	{
		for(i=0;i<sLi.length;i++)
		{
			if(i==itarget)
			{
				sLi[i].style.filter='alpha(opacity:100)';
				sLi[i].style.opacity=1;
			}
			else
			{
				sLi[i].style.filter='alpha(opacity:30)';
				sLi[i].style.opacity=0.3;
			}
		}
		starMove(sUl,'left',-(sLi.length-3)*160-5);
	}
	else 
	{
		for(i=0;i<sLi.length;i++)
		{
			if(i==itarget)
			{
				sLi[i].style.filter='alpha(opacity:100)';
				sLi[i].style.opacity=1;
			}
			else
			{
				sLi[i].style.filter='alpha(opacity:30)';
				sLi[i].style.opacity=0.3;
			}
		}
		starMove(sUl,'left',-(itarget-1)*160);
	}
}
};	