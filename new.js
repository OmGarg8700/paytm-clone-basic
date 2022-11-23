const date = new Date();

dict_month = {
    1:"Jan",
    2:"Feb",
    3:"Mar",
    4:"Apr",
    5:"May",
    6:"Jun",
    7:"July",
    8:"Aug",
    9:"Sept",
    10:"Oct",
    11:"Nov",
    12:"Dec"
}

var new_date = "";
var new_hours = "";
var new_minutes = "";

if(date.getDate() <= 9){
    new_date = "0"
}
new_date += date.getDate()

if(date.getMinutes() <= 9){
    new_minutes += "0";
}
new_minutes += date.getMinutes();

if(date.getHours() <= 9){
    new_hours += "0";
}
new_hours += date.getHours();

var time = ""
time = time + new_date + " " + dict_month[date.getMonth() + 1] + ", " + new_hours + ":" + new_minutes + " ";

if(date.getHours() < 12){
    time += "AM";
}
else{
    time += "PM";
}

console.log(time);