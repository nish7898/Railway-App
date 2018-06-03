
//Obtained API key
var api="vywkok1tr2";

//Function to display the results
function printresults(data)
{
    $("#results").append("<a>Train Name : "+data.train.name+"</a><br>")
    $("#results").append("<tr><td>Station &nbsp</td><td>Arrival Time &nbsp   </td><td>Departure Time    </td></tr>")
    for(var i=0;i<data.route.length;i++)
    {
        var route="<tr><td>"+data.route[i].station.name+"    </td><td>"+data.route[i].scharr+"   </td><td>"+data.route[i].schdep+    "</td></tr><br>";
        $("#results").append(route);
    }
}

//Function to empty the previous result
function emptyResults(){
    $("#results").empty();
}

//Finding the route
function findroute(){
    var trainnumber=document.getElementById("number").value;
    //Fetching data
    $.get("https://api.railwayapi.com/v2/route/train/"+trainnumber+"/apikey/"+api,function(){})
    .done(function(data){
        console.log(data);
        //Checking if the train number is valid
        if(data.response_code == 200)
        {
        emptyResults();
        printresults(data);
        }
        else{
            emptyResults();
            alert("Invalid Number");
        }
    })
    //If data is not obtained
    .fail(function(){
        alert("Invalid");
    })   
}

//Activating the Enter key
function keyPress(e)
{
    if(e.keyCode==13)
    findroute();
}