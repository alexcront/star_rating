classArr = [];
function saveStarConfiguration()
{
	/* save the classes inside the all stars in classArr as an array of arrays*/
	for(var i = 1; i<=5;i++)
	{	
		classArr[i] = [];
		for(var j=0;j<document.getElementById("star"+i).classList.length;j++)
		{
			classArr[i].push(document.getElementById("star"+i).classList.item(j));
		}
	}
}

function on(clicked_id) {
	var test = parseInt(clicked_id.charAt(clicked_id.length-1));
	for(var i = 1; i<=test;i++)
	{
		var element = document.getElementById("star"+i).classList.add("checked");
	}
	for(var i = test+1; i<=5;i++)
	{
		var element = document.getElementById("star"+i).classList.remove("checked");
	}

	saveStarConfiguration();
}

function onhover(hover_id)
{
	saveStarConfiguration();
	var test = parseInt(hover_id.charAt(hover_id.length-1));
	for(var i = 1; i<=test;i++)
	{
		document.getElementById("star"+i).classList.add("checked");
	}
	for(var i = test+1; i<=5;i++)
	{
		document.getElementById("star"+i).classList.remove("checked");
	}
}

function nothover()
{
	for(var i = 1; i<=5;i++)
	{
		document.getElementById("star"+i).classList = "";
		for(var j=0;j<classArr[i].length;j++)
		{
			document.getElementById("star"+i).classList.add(classArr[i][j]);
		}
	}
	classArr = [];

}