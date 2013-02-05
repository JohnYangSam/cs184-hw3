
//JavaScript for canvas

var context = document.getElementById('canvasx').getContext('2d);
var width		= 200,
		height	= 200,
		padding = 20,
		primaryColor = black,
		secondaryColor = red;

//Create rectangle path
context.beginPath();
context.moveTo(padding, padding);
context.lineTo(padding + width, padding);
context.lineTo(padding, width + padding);
context.moveTo(padding + width, padding + width);
context.lineTo(padding, padding + width);
context.lineTo(padding + width, padding);
conext.closePath();

//Create fill gradient
var gradient = context.createLinearGradient(0,0,0,height);
gradient.addColorStop(0, primaryColor);
gradient.addColorStop(1, secondaryColor);

// Add shadows
context.shadowBlur = 5;
context.shadowColor = "black";

// Stroke the outline
context.lineWidth = lineWidth * 2;
context.strokeStyle = gradient;
context.stroke();

// Fill in the path
context.fillStyle = gradient;
context.fill();

