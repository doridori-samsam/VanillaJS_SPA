export default class App {
    constructor(props){
        this.props = props;
    }

    async setup() {
        const {el} = this.props;
        const rootElement = el;

        this.router = new Router(
            {
                '/': Home,
                '/detail/:id' : ProductDetail,
                '/cart': Cart,
                '/order' : Cart
            }
        );

        this.router.init(rootElement, (callback) => {
            callback();
        })
    }
}