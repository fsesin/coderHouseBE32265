import { Router } from 'express'
import ProductsManager from '../ProductsManager.js'

const router = Router()

const productsManager = new ProductsManager()

router.get('/', async (req, res) => {
  const products = await productsManager.getProducts()
  if (products.length !== 0) {
    res.json({ products })
  } else {
    res.send('No hay productos en la base de datos')
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const product = await productsManager.getProductById(id)
  if (product) {
    res.json({ product })
  } else {
    res.send('Producto no existe en BD')
  }
})

router.post('/', async (req, res) => {
  const objProduct = req.body
  const newProduct = await productsManager.createProduct(objProduct)
  res.json({ message: 'Producto creado con exito', product: newProduct })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const objProduct = req.body
})

router.delete('/:id', async(req, res) => {
  const { id } = req.params
  const deletedProduct = await productsManager.deleteById(id)
  res.json({message:'Producto eliminado con exito',product:deletedProduct})
})

export default router
