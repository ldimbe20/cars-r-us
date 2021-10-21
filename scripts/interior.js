import { getInterior } from "./database.js" //importing the getInterior function which is a function that creates a copy of the original
//interior array from the database


//creating a variable that equals the function getInterior which creates a copy of the interior array from the database invoked function
const interiors = getInterior()

document.addEventListener( // 
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            const chosenOption = changeEvent.target.value 
            console.log(chosenOption)  // "1" or "2"
        }
    }
)

export const Interiors = () => {  //exporting the interior variable that contains the function getInterior
    let html = "<ul>" //creating an unordered list in html

    // This is how you have been converting objects to <li> elements
     { // making a forof loop that iterates through the interior array
        html += `<li>              
        <select id="interiors">
            <option value="0">Beige Fabric</option>
            <option value="1">Charcoal Fabric</option>
            <option value="2">White Fabric</option>
            <option value="2">Black Leather</option>
        </select>
        </li>` 
    }
    //using the addition assignment operator to create a list item that contains the radio button

    html += "</ul>" //using addition operator to add an ending unordered list tag to each new list item
    return html  //returning the html so it shows up in index
}

const listItemsArray = sizes.map(
    (size) => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    }
)
html += listItemsArray.join("")