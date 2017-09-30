# Final-Project
Tournament Bracket Generator

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


