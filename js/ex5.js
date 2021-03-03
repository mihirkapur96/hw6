/* Homework 6
Exercise 5 JavaScript code
*/
console.log("Mihir's output from Homework 6 Exercise 5");
const links = document.getElementById ("links");
const infosys = document.getElementById ("IS")
const cob = document.createElement("li");
cob.id = "collegeofbusiness";
cob.innerHTML = '<li id = "collegeofbusiness"><a href = "https://www.csulb.edu/college-of-business"> College Of Business</a>'
links.insertBefore(cob,infosys);