var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var initialList = [claim1, claim2, claim3, claim4, claim5]

var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}
var claim6 = new claim('Bob Roberts', 'Primary Care', 220);
var claim7 = new claim('Little Mermaid', 'Emergency', 1800);
var claim8 = new claim('Bob Dylan', 'Specialist', 3000);
var claim9 = new claim('Patti Smith', 'Optical', 50);
var claim10 = new claim('Ms Marvel', 'Emergency', 4200);

initialList.push(claim6, claim7, claim8, claim9, claim10);
console.log(initialList);

for (var it = 0; it < initialList.length; it++) {
console.log((amountPaid(initialList[it]) * 100) + '%');
console.log(covered(initialList[it]))
}
function amountPaid(claim){
//function to determine percent covered
var visitType = claim.visitType;
switch(visitType){
	case 'Optical':
	percentCovered = 0.0;
	break;
	case 'Specialist':
	percentCovered = 0.1;
	break;
	case 'Emergency':
	percentCovered = 1.0;
	break;
	case 'Primary Care':
	percentCovered = 0.5;
	break;
	default:
	percentCovered = 0.0;
}

return percentCovered;
}


//function to determine amount covered
function covered(claim){
var amountCovered = Math.round(percentCovered * initialList[it].visitCost);


console.log('Paid out $' + amountCovered + ' for ' + initialList[it].patientName);
}
