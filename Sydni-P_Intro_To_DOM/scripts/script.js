document.getElementById("title").innerText = "Text Changed via Console!";
// Select the title by ID
let titleElement = document.getElementById("title");

// Select all paragraphs with class "SayingHi"
let descriptions = document.querySelectorAll(".SayingHi");

// Log all selected paragraphs to the console and update their text
descriptions.forEach((description, index) => {
    console.log(descriptions);
    description.innerText = `This is paragraph number ${index + 1}`;
});

let changeTextButton = document.getElementById("changeText");
changeTextButton.addEventListener("click", () => {
    console.log("Button clicked!");  // Log button click
    document.getElementById("title").innerText = "Text Changed via Button!";
});