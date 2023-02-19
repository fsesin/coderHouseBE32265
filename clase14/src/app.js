import express from 'express'
import productsRouter from './routes/products.router.js'
import './db/dbConfig.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/products', productsRouter)









const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
