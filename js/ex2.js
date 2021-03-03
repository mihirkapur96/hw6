/* Homework 6
Exercise 2 JavaScript code
*/
console.log("Mihir's output from Homework 6 Exercise 2");
const displayText400 = () => {
  const elements= Array.from(document.getElementsByClassName ("400level"));
  (elements).forEach(elem => console.log(elem.textContent));
} 

displayText400();