import { productsModel } from './db/models/products.model.js'

export default class ProductsManager {
  async getProducts() {
    try {
      const products = await productsModel.find({})
      return products
    } catch (error) {
      console.log(error)
    }
  }
  async getProductById(id){
    try {
        const product = await productsModel.findById(id)
        return product
    } catch (error) {
        console.log(error);
    }
  }

  async createProduct(obj){
    try {
        const newProduct = await productsModel.create(obj)
        return newProduct
    } catch (error) {
        console.log(error);
    }
  }

  async deleteById(id){
    try {
        const deletedProduct = await productsModel.deleteOne({_id:id})
        return deletedProduct
    } catch (error) {
        console.log(error);
    }
  }
}
