export default class ProductPage {
    constructor() {
        this.mainElement = ProductPage.createMainElement();
        this.product = {};
    }

    static createMainElement() {
        const mainElement = document.createElement("MAIN");
        mainElement.classList.add("product");

        mainElement.innerHTML = `<h1 class='ir'>상품목록 페이지 </h1>
<ul class="product-list"></ul>`;

        return mainElement;
    }

    async getProductData() {
        const response = await fetch("http://test.api.weniv.co.kr/mall");
        const data = await response.json();

        this.product = await data;
    }
}