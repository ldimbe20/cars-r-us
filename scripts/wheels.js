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

document.addEventListener( // 
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {  //change event target is paints
            const chosenOption = changeEvent.target.value  //variable is made to equal the "paints" target
            console.log(chosenOption)  // "1" or "2" // console log the variable chosen option
        }
    }
)

export const Wheels = () => {  // creating a function that is a dropdown html element
    let html = "<Wheels>"  // html element name wheels 
    html += '<select id="wheels">'// using addition assignment to  
    html += '<option value="0"> Select your Wheel Type </option>'

const arrayOfOptions= wheels.map ( (wheel) => {
        return `<option value="${wheel.id}"> ${wheel.size} </option>`
    }
)

    html += arrayOfOptions.join ("")
    html += "</select>"
    return html  

}