import { AllDetailing } from "./AllDetailing.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = AllDetailing()
}

renderAllHTML()

