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

//Don't change above here - works : )

    //gets name of person to search for in victim list
    var rv = (" " + (prompt("Name of victim to research:")));

    
    console.log(names);

//finds name of victim in names array

    //turns rv into a string (just in case)
    var research = String(rv);
    //finds the position of research(the name entered)
    var positionName = names.indexOf(" " + research);

//defines x & y outside of the function
var x = 0;
var y = 0;

    //finds the location of the name entered in names of victims
    var findNamePosition = function() {
        x=names.indexOf(research);
        y = x+1;
        //console.log(y);
    }

//calls function find
findNamePosition();

//finds the street that the victim lives on
var s = streets[y-1];
var streetStr = String(s);

//might not need this when k is working -->
    //finds the position in the array of that street
    var volStreet = streetsV.indexOf(s); // this works
    console.log(volStreet);

    //finds the name of the volunteer that lives on that street(first volunteer)
    var firstVolunteer = namesV[volStreet]; 
//<--end

//find all the voluneerS that live on that street
var k = [];

for(var j=0; j < streetsV.length; j++) {
    //this does not work - needs to find all the matching streets & save the people
    console.log("looped through " + j);
        var hi = streetsV.indexOf(streetStr,j+1); //index of the string of name of the street
        //^finds the location in the index of the street array of the matching streets
        //need to find the corresponding volunteers
        var cor = namesV[hi];
        k.push(cor);
        
    }



    alert("Name of victim you just said:" + research + 
    //"\n # position in array of names: " + y +
    //"\n Street that" + research + " lives on is:" + s + 
    //"\n The position in array of streetsV: " + volStreet + 
    //"\n The volunteer that lives on that street and can help is: " + firstVolunteer +
    "\n All the volunteers that live on that street: " + k);