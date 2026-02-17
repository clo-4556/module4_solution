// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/
// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)

(function() {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    // adding a function to determine the greeting displayed based on the name
    function getGreeting(name) {
        var firstLetter = name.charAt(0).toLowerCase(); 
        
        // look at first letter and determine if 'j'
        if (firstLetter == 'j') {
            return byeSpeaker.speakSimple(name); 
        }
        else {
            return helloSpeaker.speakSimple(name); 
        }
    }

    // Build the gretting array using the mapping function
    var greetingsArray = names.map(getGreeting); 

    for (var i=0; i<greetingsArray.length; i++) 
    {
        console.log(greetingsArray[i]); 
    }
    
    // Bonus option - using reduce
    var greetingList = names.reduce(function(accumulator, name)
    { 
        // make first letter lowercase so case does not matter
        var firstLetter = name.charAt(0).toLowerCase(); 

        //look at first letter and determine if 'j'
        if (firstLetter == 'j') {
            accumulator.bye.push(byeSpeaker.speakSimple(name)); 
        } else {
            accumulator.hello.push(helloSpeaker.speakSimple(name)); 
        }
        return accumulator; 
    }, 
    // need to initialize lists for the accumulator 
    {
        hello: [], 
        bye: []
    }); 
    
    // now pring the resulting lists from the accumulator
    for (var i=0; i<greetingList.hello.length; i++) 
    {
        console.log(greetingList.hello[i]);
    }
    for (var j=0; j<greetingList.bye.length; j++)
    {
        console.log(greetingList.bye[j]); 
    }
})(); 
