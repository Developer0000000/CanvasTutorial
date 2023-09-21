// 1️⃣ Draw a line ⭐

// let canvas = document.getElementById('myCanvas');
// let context = canvas.getContext("2d");
// context.moveTo(0, 0);
// context.lineTo(200, 200);
// context.stroke();




// 2️⃣ Draw a rectangle ⭐

// let canvas = document.getElementById('myCanvas');
// let context = canvas.getContext("2d");
// context.fillRect(40, 40, 160, 100);













// 3️⃣ For game UI ⭐

let canvas = document.getElementById('myCanvas');
let context = canvas.getContext("2d");

let width = 400;
let height = 600;

// paddle   w-h
let paddleWidth = 50;
let paddleHeight = 10;


canvas.width = width;
canvas.height = height;

// Rectangle 
context.fillStyle = 'black';
context.fillRect(0, 0, width, height);


// paddle top
context.fillStyle = 'white';
context.fillRect(175, 10, paddleWidth, paddleHeight);

// paddle bottom
// context.fillRect(175, 580, paddleWidth, paddleHeight);
context.fillRect(175, height - 20, paddleWidth, paddleHeight);


// center line
context.beginPath();
context.setLineDash([6]);
context.strokeStyle = 'gray';
context.moveTo(0, height / 2);
context.lineTo(width, height / 2);
context.stroke();


// circle
context.beginPath();
context.setLineDash([]);
context.arc(width / 2, height / 2, 10, 0, 2 * Math.PI, true);
context.fillStyle = 'white';
context.fill();
context.stroke();


// text 
context.font = '32px Josefin Sans';
context.fillText(10, 25, (height / 2) - 40);
context.fillText(20, 25, (height / 2) + 60);