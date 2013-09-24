var numVictims = prompt("How many disaster victims do you wish to enter?");
var names = [];
var phones = [];
var streets = [];


for(var i=0; i < numVictims; i++) {
	var nameVictim = (" " + (prompt("Name of victim:")));
	var phoneVictim = (" " + (prompt("Phone number of victim:")));
	var streetVictim = (" " + (prompt("Street of victim:")));

	names.push(nameVictim);
	phones.push(phoneVictim);
	streets.push(streetVictim);

}

var numVolunteers = prompt("How many volunteers do you want to enter");
var namesV = [];
var phonesV = [];
var streetsV = [];

for(var i=0; i < numVolunteers; i++) {
	var nameV = (" " + (prompt("Name of volunteer:")));
	var phoneV = (" " + (prompt("Phone number of volunteer:")));
	var streetV = (" " + (prompt("Street of volunteer:")));

	namesV.push(nameV);
	phonesV.push(phoneV);
	streetsV.push(streetV);

}

alert("Number of victims: " + numVictims +  
	"\n These are the people that need help: " + names +  
	"\n Number of volunteers: " + numVolunteers + 
	"\n These are the volunteers: " +  namesV);
