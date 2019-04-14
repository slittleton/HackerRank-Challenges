/*
Problem 10 - Grading Students
HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100.
Any  less than 40 is a failing grade.

Sam is a professor at the university and likes to round each 
student's  according to these rules:

If the difference between the grade and the next multiple of 5 is 
less than 3, round grade up to the next multiple of 5.

If the value of grade is less than 38, no rounding occurs as the
 result will still be a failing grade.
For example, grade=84 will be rounded to 85 but grade=29 will not be 
rounded because the rounding would result in a number that is less 
than 40.

Given the initial value of  for each of Sam's  students, write code to automate the rounding process.
*/

function gradingStudents(grades) {
  let graded = [];
 
   for (var i = 0; i < grades.length; i ++){
     if (grades[i] < 38){
       graded.push(grades[i]);
     }
     if(grades[i] % 5 < 3 && grades[i] > 38){
       graded.push(grades[i])
     }
     if (grades[i] % 5 >= 3 && grades[i] >= 38){
       graded.push((5 - (grades[i] % 5)) + grades[i]);
     }
   }
   return graded
 }
 
 gradingStudents([73,67,38,33]); //75,67,40,33
 
 