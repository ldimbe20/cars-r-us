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

document.addEventListener( // 
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technologies") {  //change event target is paints
            const chosenOption = changeEvent.target.value  //variable is made to equal the "paints" target
            console.log(chosenOption)  // "1" or "2" // console log the variable chosen option
        }
    }
)

export const Technologys = () => {  // creating a function that is a dropdown html element
    let html = "<Paints>"  // html element name paints 
    html += '<select id="paints">'// using addition assignment to  
    html += '<option value="0"> Select your Paint Type </option>'

const arrayOfOptions= technologys.map ( (technology) => {
        return `<option value="${technology.id}"> ${technology.type} </option>`
    }
)

    html += arrayOfOptions.join ("")
    html += "</select>"
    return html  

}
