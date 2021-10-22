import { getInterior } from "./database.js" //importing the getInterior function which is a function that creates a copy of the original
//interior array from the database


//creating a variable that equals the function getInterior which creates a copy of the interior array from the database invoked function
const interiors = getInterior()

document.addEventListener( // 
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {  //change event target is interiors
            const chosenOption = changeEvent.target.value  //variable is made to equal the "interiors" target
            console.log(chosenOption)  // "1" or "2" // console log the variable chosen option
        }
    }
)

export const Interiors = () => {  // creating a function that is a dropdown html element
    let html = "<Interiors>"  // html element name interiors 
    html += '<select id="interiors">'// using addition assignment to  
    html += '<option value="0"> Select your Interior Type </option>'

const arrayOfOptions= interiors.map ( (interior) => {
        return `<option value="${interior.id}"> ${interior.type} </option>`
    }
)

    html += arrayOfOptions.join ("")
    html += "</select>"
    return html  

}

