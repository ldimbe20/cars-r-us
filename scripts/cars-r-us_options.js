
import { interiors } from "./interiors.js"
import { paints } from "./paints.js"
import { Orders } from "./Orders.js"
import { wheels } from "./wheels.js"
import { technology } from "./technology"


document.addEventListener(
    "click",
    (event) => {
    }
)

export const detailingOptions = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Wheels</h2>
                ${wheels()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${interiors()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${paints()}
            </section>
            <section class="choices__styles options">
            <h2>Styles</h2>
            ${technology()}
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
