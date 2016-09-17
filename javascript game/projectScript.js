var clickedTime; var createdTime;var reactionTime;


//functino that will generate random color code
function getRandomColor(){

var letters ='0123456789ABCDEF'.split('');
var color='#';
for (var i =0;i<6; i++)
  {color +=letters[Math.round(Math.random()*15)]; }
return color;
}


//function to display box and get createdTime of the box
function makebox(){
var time = Math.random();
time = time*5000;
setTimeout(function() {
  //random function creates number between 0 to 1.
  if(Math.random()>0.5){
  //This will create border radius.
  document.getElementById('box').style.borderRadius="100px";
  }
  else {
    document.getElementById('box').style.borderRadius="0";
  }
  //creating top variable to assign top margin
  var top =Math.random();
  top=top*300;
  //creating top variable to assign left margin
  var left =Math.random();
  left=left*1000;
  //assigning random created top and left margin
  document.getElementById('box').style.top=top+"px";
  document.getElementById('box').style.left=left+"px";
  //This will assign random color created by the function above
  document.getElementById('box').style.backgroundColor =getRandomColor();
  // display "block" disregards the display setting for the element.
  document.getElementById('box').style.display="block";
  //time when box was created
  createdTime=Date.now();
},time);
}


document.getElementById('box').onclick=function(){
//time when box was clicked
clickedTime=Date.now();
reactionTime =(clickedTime-createdTime)/1000;
this.style.display="none";
//If time is more than 1sec we will display time and clear any display style
// set for "slow" span. and then add text "You are slow"
if(reactionTime>1)
{document.getElementById('YourTime').innerHTML=reactionTime;
//this will help ignore display style if it set to none from else statement.
document.getElementById('slow').style.display="block";
document.getElementById('slow').innerHTML="You are slow!";}
else
{document.getElementById('YourTime').innerHTML= reactionTime;
//This will help disappear anything displaying in span slow.
document.getElementById('slow').style.display="none";}
makebox();
}
// we are calling the makebox function so it can appear for the 1st time.
makebox();
