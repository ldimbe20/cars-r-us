import { getWheels } from "./database.js" //importing the getWheel function which is a function that creates a copy of the original
//wheel array from the database


//creating a variable that equals the function getWheel which creates a copy of the wheel array from the database invoked function
const wheels = getWheels()

document.addEventListener( // 
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            window.alert(`User chose wheel ${event.target.value}`)
        }
    }
)

export const Wheels = () => {  
    let html = "<ul>" //creating an unordered list in html

    // This is how you have been converting objects to <li> elements
    for (const wheel of wheels) { // making a forof loop that iterates through the wheel array
        html += `<li>              
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.wheel}
        </li>` 
    }
    //using the addition assignment operator to create a list item that contains the radio button

    html += "</ul>" //using addition operator to add an ending unordered list tag to each new list item
    return html  //returning the html so it shows up in index
}

