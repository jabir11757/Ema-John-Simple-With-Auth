import { getStoredData } from "../../utilities/fakedb";

export const productsCartLoader = async () => {

    //getProducts
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //getCart

    const savedCart = getStoredData();
    const initialCart = [];

    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }


    return { products: products, initialCart: initialCart };
}