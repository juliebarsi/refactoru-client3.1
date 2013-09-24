var names = [];
var phones = [];
var streets = [];
var numVictims = 1;

    var nameVictim = (" " + (prompt("Name of victim:")));
    var phoneVictim = (" " + (prompt("Phone number of victim:")));
    var streetVictim = (" " + (prompt("Street of victim:")));

    names.push(nameVictim);
	phones.push(phoneVictim);
	streets.push(streetVictim);

var add = function() {
    
var r = confirm("Do you want to continue adding victims?");

if (r === true) {

    numVictims = numVictims + 1;
  
    var nameVictim = (" " + (prompt("Name of victim:")));
    var phoneVictim = (" " + (prompt("Phone number of victim:")));
    var streetVictim = (" " + (prompt("Street of victim:")));

	names.push(nameVictim);
	phones.push(phoneVictim);
	streets.push(streetVictim);

add();
}
    
}

add();

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
	"\nThese are the people that need help: " + names +  
	"\nNumber of volunteers: " + numVolunteers + 
	"\nThese are the volunteers: " +  namesV);
