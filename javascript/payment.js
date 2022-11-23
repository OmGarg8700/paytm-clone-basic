// This is for main_payment.html
let array = []

function main_fun(){
    localStorage.setItem("payment", document.getElementById("input_number").value);
    // setting url link
    localStorage.setItem("link", window.location.href);
    location.href = "upi.html";
}


// -----------------------------------------------------------------------------------
// This is for upi.html
function upi_fun(){
    location.href = "index.html";
}

let upi_amt = document.getElementsByClassName("upi-amount")[0];
if(upi_amt != undefined){
    upi_amt.innerHTML = `<p> ${localStorage.getItem("payment")}.00 </p>`;
}


// -------------------------------------------------------------------------------------
// This is for index.html

// changing the names of owners
// let owners = document.getElementsByClassName("top");
// if(owners != undefined){
//     // <img src="WhatsApp Image 2022-08-02 at 1.44.31 PM.jpeg" alt="No Image">
//     // <div class="value">
//     //     <p>104</p>
//     // </div>

//     link = localStorage.getItem("link").split("/")[3];
    
//     if(link == "canteen"){
//         owners.innerHTML = `<img src="WhatsApp Image 2022-08-02 at 1.44.31 PM.jpeg" alt="No Image">
//         <div class="value">
//             <p>104</p>
//         </div>`;
//         console.log(owners.innerHTML);
//     }
//     else if(link == "mess"){
//         // owners.innerHTML = `<img src="WhatsApp Image 2022-09-08 at 12.42.14.jpeg" alt="No Image"> <div class="value"> <p>104</p> </div>`;
//         // console.log(owners.innerHTML);

//         let image = document.getElementsByClassName("navbar-image");
//         image[0].src = "WhatsApp%20Image%202022-09-08%20at%2012.42.14.jpeg";
        


//     }
//     else if(link == "juice"){
//         console.log("hello");
//         owners.innerHTML = `<img src="WhatsApp Image 2022-09-08 at 12.42.13.jpeg" alt="No Image">
//         <div class="value">
//             <p>104</p>
//         </div>`;
//     }
// }


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

function index_fun(){
    document.documentElement.requestFullscreen();
    // window.scroll(0, 10);
}

function sound_fun(){
    var audio = new Audio("Paytm - Notification.mp3");
    audio.play();
}

let index_amt = document.getElementsByClassName("index-amount")[0];
if(index_amt != undefined){
    index_amt.innerHTML = localStorage.getItem("payment");
    console.log(index_amt.innerHTML);

    // for history
    array.push(localStorage.getItem("payment"));
    sessionStorage.setItem("history", JSON.stringify(array));

    console.log(JSON.parse(sessionStorage.getItem("history")));
}

let index_time = document.getElementsByClassName("date")[0];
if(index_time != undefined){
    index_time.innerText = time;
    console.log(time);
}