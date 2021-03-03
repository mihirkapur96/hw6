/* Homework 6
Exercise 6 JavaScript code
*/
console.log("Mihir's output from Homework 6 Exercise 6");
const div = document.getElementById("content");
const word = [{
    term: "Procastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
}, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const dlItem = document.createElement("dl");

word.forEach(dl => {
    const dtItem = document.createElement ("dt");
    const ddItem = document.createElement ("dd");

    dtItem.textContent = dl.term;
    ddItem.textContent = dl.definition;

    dtItem.style.fontWeight = "bold";

    dlItem.appendChild(dtItem);
    dlItem.appendChild(ddItem);
});

const divItem = document.getElementById("content");
divItem.appendChild(dlItem);