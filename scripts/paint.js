import { getPaint } from "./database.js" //importing the getPaint function which is a function that creates a copy of the original
//paint array from the database


//creating a variable that equals the function getPaint which creates a copy of the paint array from the database invoked function
const paints = getPaint()

document.addEventListener( // 
    "change",
    (event) => {
        if (event.target.name === "paint") {
            window.alert(`User chose paint ${event.target.value}`)
        }
    }
)

export const Paints = () => {  //creating a new function that creates string
    let html = "<ul>" //creating an unordered list in html

    // This is how you have been converting objects to <li> elements
    for (const paint of paints) { // making a forof loop that iterates through the paint array
        html += `<li>              
            <input type="radio" name="paint" value="${paint.id}" /> ${paint.id}
        </li>` 
    }
    //using the addition assignment operator to create a list item that contains the radio button

    html += "</ul>" //using addition operator to add an ending unordered list tag to each new list item
    return html  //returning the html so it shows up in index
}

