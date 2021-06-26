var date = new Date();

function renderCalendar() {

date.setDate(1);

var day = date.getDay();
var today = new Date();
var monthDays = document.querySelector(".days");

//gives last day of the current month
var lastDate = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();


//gives previous month
var prevDate = new Date(date.getFullYear(),date.getMonth(),0).getDate();

var lastdayIndex = new Date(
	date.getFullYear(),
	date.getMonth() + 1,
	0
	).getDay();
var nextDays = 7- lastdayIndex - 1;


var months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
]

document.querySelector(".date h1").innerHTML = months[date.getMonth()];
document.querySelector(".date p").innerHTML = new Date().toDateString();

let days = "";

for(x =day; x > 0;x--)
{
	days += "<div class='prev'>"+(prevDate - x + 1)+"</div>";
}
console.log(day);

for( i=1;i<=lastDate;i++)
{
	if(i==today.getDate() && date.getMonth()==today.getMonth())
	{
		days += "<div class='today' id='"+i+"' onclick = 'addevents1("+i+")'>"+i+"</div>";
	}
	else{
	days += "<div id='"+i+"' onclick = 'addevents1("+i+")'>"+i+"</div>";
	}
}
document.getElementsByClassName("days")[0].innerHTML = days;


for(j =1;j<= nextDays; j++)
{
	days += `<div class="next">${j}</div>`;
	monthDays.innerHTML = days;
}

}

 function moveDate(para) {
            if(para == "leftarrow") {
                date.setMonth(date.getMonth() - 1);
            } else if(para == 'rightarrow') {
                date.setMonth(date.getMonth() + 1);
            }
            renderCalendar();
        }

function addevents1(i){
	var x=new Date();
	if(i<10)
	document.getElementById("startdate").value="2021-06-0"+i+"T"+"15:11";
	else
	document.getElementById("startdate").value="2021-06-"+i+"T"+"15:11";
	var modal = document.getElementById("modalbox");
	var btn = document.getElementById(i);
	var span = document.getElementsByClassName("close")[0];
	btn.onclick = function() {
		modal.style.display = "block";
	}
	span.onclick = function() {
		modal.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == modal) {
		modal.style.display = "none";
		}
	}
	}