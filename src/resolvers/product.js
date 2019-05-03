import Product from '../models/product'

export const getProducts = async () => {
    return await Product.find({});
}

export const addProduct = async args => {
    const newProduct = new Product({ ...args });
    const response = await newProduct.save();
    return response;
}

export const getProductById = async id => {
    return await Product.findById(id);;
}
