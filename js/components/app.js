import html from '../html.js'; 
import productApi from '../services/productApi.js';
import ProductsList from './productsList.js';
 
let template = function() {
    return html`
        <header>
            <h1 class="app-header"> Bus Mall</h1>
        </header>
            <main>
            <div></div>
            <div class="grid-container">
            </main>
    `;
};


export default class App {
    render() {
        let dom = template();
        let main = dom.querySelector('main');

        let products = productApi.getRandomProducts();
        let productsList = new ProductsList({
            products: products,
            onSelect:(product) => {
                productApi.handleSelect(product.name);
            }
        });
        main.appendChild(productsList.render());
        console.log(products);
        return dom;
    }
}

