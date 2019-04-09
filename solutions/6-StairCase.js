/*
Staircase

Consider a staircase of size n=4 :

   #
  ##
 ###
####

Observe that its base and height are both equal to , and the image 
is drawn using # symbols and spaces. The last line is not preceded 
by any spaces.

Write a program that prints a staircase of size n

staircase has the following parameter(s):

n: an integer
 
 */
function staircase(n) {
    let hash = []
    let spaces = []
    let merged =[]

    for(let i = 1; i <= n; i++){

        spaces = Array(n-i).fill(' ');
        hash = Array(i).fill('#');
        
        merged = spaces.concat(hash).join('');

        console.log(merged)
    }
    
}

staircase(4);