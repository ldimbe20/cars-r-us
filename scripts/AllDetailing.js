
import { Interiors } from "./interior.js"  
import { Paints } from "./paint.js"
import { Wheels } from "./wheels.js"
import { Technology } from "./technology.js"


document.addEventListener(
    "click",
    (event) => {
    }
)

export const AllDetailing = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${Interiors()}
            </section>
            <section class="choices__paint options">
                <h2>Paints</h2>
                ${Paints()}
            </section>
            <section class="choices__technology options">
            <h2>Technology</h2>
            ${Technology()}
        </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
        </article>
    `
}
