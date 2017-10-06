# Final-Project
BRING IT!
Bracket Generator

This web app allows users to create a bracket to set up tournaments
and/or keep track of existing tournaments. 

Features:
    Sign up to create an account
        Username
        Email address(?)
        Password

    Login
        Simple dashboard:
            View previous brackets created
            Create and save brackets to their account
            Revisit and edit existing brackets
    
    About
        information about the application
        about the developer (ME) behind the application
        libraries/apis used
        materialize css

    Create Bracket
        Enter a name for the bracket
        Choose the type:
            Single Elimination
            Randomized
        Bracket size:
            choose a number:
                GET AT LEAST A BRACKET OF 8 WORKING
                max 256
            enter the entrants in a text field
            ** upload a text file to read
        
Future Goals:
    Double Elimination
    Round Robin
    Match seeding
    File upload (if current goal doesn't meet deadline)

notes:

#number of (entrants)
let entrants = ""


#determine the number of (rounds) in a tournnament:
#no. of entrants / log(2)
let rounds = Math.log(entrants)/Math.log(2);

#bracket size
bracketSize = Math.pow(2, rounds);
    - not sure if this is needed as the entrant count ends up being equal to the bracket size anyway

#set up the bracket(entrants)



#render the bracket
renderBracket(param?)


