var x=0;
var dic={
	"NewDelhi":2,
	"NewYork":4,
	"Islamabad":7,
	"Colombo":8,
};

function fun(n)
{
	var l=document.getElementsByName("q"+String(n));
	for(var i=0;i<l.length;i++)
	{
		if(l[i].checked==true)
		{
			x=x+dic[l[i].value]
			document.getElementById("ques"+String(n)).style.transform="translateY(-250px)";
			document.getElementById("ques"+String(n)).style.visibility="hidden";
			break;
		}
	}
	document.getElementById("ans").innerHTML=x;
}