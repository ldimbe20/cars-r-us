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

document.addEventListener( // 
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paints") {  //change event target is paints
            const chosenOption = changeEvent.target.value  //variable is made to equal the "paints" target
            console.log(chosenOption)  // "1" or "2" // console log the variable chosen option
        }
    }
)

export const Paints = () => {  // creating a function that is a dropdown html element
    let html = "<Paints>"  // html element name paints 
    html += '<select id="paints">'// using addition assignment to  
    html += '<option value="0"> Select your Paint Type </option>'

const arrayOfOptions= paints.map ( (paint) => {
        return `<option value="${paint.id}"> ${paint.color} </option>`
    }
)

    html += arrayOfOptions.join ("")
    html += "</select>"
    return html  

}
