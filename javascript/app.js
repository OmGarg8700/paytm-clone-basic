const http = require('http');
const express = require("express");
const path = require("path");
const app = express();

const localhost = "192.168.1.35";
let new_p = path.join(__dirname, "../");

app.use(express.static(new_p));

app.get("/", (req, res)=>{
    res.send("hello");
});

app.get("/canteen", (req, res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Paytm</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    
        <link rel="stylesheet" href="styles/payment.css">
        <script>
            document.documentElement.webkitRequestFullScreen();
        </script>
    </head>
    <body>
        <header>
            <div id="circle">
                <p>AA</p>
            </div>
            <p style="font-weight: bold;">Abhinav Anand</p>
            <div class="number">
                <img src="unnamed.png" alt="">
                <p>99999 99999@paytm</p>
            </div>
        </header>
    
        <a href="main_payment.html">&#x2190;</a>
    
        <div class="main-amount-box">
            <p>You are paying</p>
            <div class="main-payment">
                <p>&#8377;</p>
                <input type="number" id="input_number">
            </div>
        </div>
    
        <div id="message">
            <input type="text" placeholder="Add message">
        </div>
    
        <button id="pay-button" onclick="main_fun()">Pay</button>
    
    </body>
    <script src="javascript/payment.js"></script>
    </html>`);
});

// app.get("/mess", (req, res)=>{
//     res.send(`<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Paytm</title>
//         <link rel="preconnect" href="https://fonts.googleapis.com">
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//         <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    
//         <link rel="stylesheet" href="styles/payment.css">
//     </head>
//     <body>
//         <header>
//             <div id="circle">
//                 <p>OG</p>
//             </div>
//             <p style="font-weight: bold;">Om Garg</p>
//             <div class="number">
//                 <img src="unnamed.png" alt="">
//                 <p>8700693134@paytm</p>
//             </div>
//         </header>
    
//         <a href="main_payment.html">&#x2190;</a>
    
//         <div class="main-amount-box">
//             <p>You are paying</p>
//             <div class="main-payment">
//                 <p>&#8377;</p>
//                 <input type="number" id="input_number">
//             </div>
//         </div>
    
//         <div id="message">
//             <input type="text" placeholder="Add message">
//         </div>
    
//         <button id="pay-button" onclick="main_fun()">Pay</button>
    
//     </body>
//     <script src="javascript/payment.js"></script>
//     </html>`);
// });

// app.get("/juice", (req, res)=>{
//     res.send(`<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Paytm</title>
//         <link rel="preconnect" href="https://fonts.googleapis.com">
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//         <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    
//         <link rel="stylesheet" href="styles/payment.css">
//     </head>
//     <body>
//         <header>
//             <div id="circle">
//                 <p>OG</p>
//             </div>
//             <p style="font-weight: bold;">Om Garg</p>
//             <div class="number">
//                 <img src="unnamed.png" alt="">
//                 <p>8700693134@paytm</p>
//             </div>
//         </header>
    
//         <a href="main_payment.html">&#x2190;</a>
    
//         <div class="main-amount-box">
//             <p>You are paying</p>
//             <div class="main-payment">
//                 <p>&#8377;</p>
//                 <input type="number" id="input_number">
//             </div>
//         </div>
    
//         <div id="message">
//             <input type="text" placeholder="Add message">
//         </div>
    
//         <button id="pay-button" onclick="main_fun()">Pay</button>
    
//     </body>
//     <script src="javascript/payment.js"></script>
//     </html>`);
// });

app.listen(8000, ()=>{
    console.log("Server has started !!");
})

// const server = http.createServer((req, res)=>{
//     res.end("Hello world");
// })


// server.listen(8000, localhost , ()=>{
//     console.log("Listeninig");
// });