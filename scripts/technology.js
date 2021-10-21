import { getTechnology } from "./database.js" //importing the getTechnology function which is a function that creates a copy of the original
//technology array from the database


//creating a variable that equals the function getTechnology which creates a copy of the technology array from the database invoked function
const technologys = getTechnology()

document.addEventListener( // 
    "change",
    (event) => {
        if (event.target.name === "technology") {
            window.alert(`User chose technology ${event.target.value}`)
        }
    }
)

export const Technology = () => {  
    let html = "<ul>" //creating an unordered list in html

    // This is how you have been converting objects to <li> elements
    for (const technology of technologys) { // making a forof loop that iterates through the technology array
        html += `<li>              
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.id}
        </li>` 
    }
    //using the addition assignment operator to create a list item that contains the radio button

    html += "</ul>" //using addition operator to add an ending unordered list tag to each new list item
    return html  //returning the html so it shows up in index
}

