/*
Given a time in -hour AM/PM format, convert it to military (24-hour) 
time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 
24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 
on a 24-hour clock.
*/

function timeConversion(s) {
  let timeArr = []
  let militaryTime;
     if(s.charAt(s.length-2) === 'P' || s.charAt(s.length-2) === 'p' ){
        timeArr = s.split(':');
 
        if(Number(timeArr[0]) === 12){
             militaryTime = s.substring(0, s.length - 2);
             return militaryTime
        }
 
        timeArr[0] = (Number(timeArr[0]) + 12).toString()
        militaryTime = timeArr.join(':');
 
        militaryTime = militaryTime.substring(0, militaryTime.length - 2);
        return militaryTime
 
     } else if(s.charAt(s.length-2) === 'A' || s.charAt(s.length-2) === 'a' ){
         timeArr = s.split(':');
 
         if(Number(timeArr[0]) === 12){
             timeArr[0] = '00'
             militaryTime = timeArr.join(':')
             return  militaryTime = militaryTime.substring(0, militaryTime.length - 2)
         }
 
         militaryTime = s.substring(0, s.length - 2)
         return militaryTime;
     }
 }
 let q = '12:45:54PM';
 let x = '07:05:45PM';
 let y = '07:05:45AM';
 let z = '12:40:22AM';
 console.log(timeConversion(q)); //12:45:54
 console.log(timeConversion(x)); //19:05:45
 console.log(timeConversion(y))  //07:05:45
 console.log(timeConversion(z))  //00:40:22
 