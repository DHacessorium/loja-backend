const express = require('express')
const router = express.Router()

const mainController = require('../controllers/MainControler')
const ProductController = require('../controllers/ProductController')

// Página principal
router.get('/', mainController.home)
// Página Pulseiras
router.get('/pulseiras', mainController.pulseiras)
// Página Brincos
router.get('/brincos', mainController.brincos)
// Página Colares
router.get('/colares', mainController.colares)
// Página Login
router.get('/login', mainController.login)
// Página Carrinho2
router.get('/carrinho2', mainController.carrinho2)
// Página Cadastro
router.get('/cadastro', mainController.cadastro)

// Página EJS com o produtos dinâmicos
router.get('/ofertas', mainController.ofertas)
// Página Informações do produto
router.get('/infoProduto', mainController.infoProduto)
// Página Informações do produto
router.get('/compraFinalizada', mainController.compraFinalizada)
// Rotas para produto

// GET - Trazer informações do produto
router.get('/infoProduto/:id', ProductController.infoProduto)

// GET - EJS Create Form - View
router.post('/PostProduto', ProductController.PostProduto)
// POST - EJS Create
router.get('/criarProduto', ProductController.criarProduto)







// # Product
// GET ALL
router.get('/product', ProductController.showAll)
// GET By Id
router.get('/product/:id', ProductController.showById)
// POST
router.post('/product', ProductController.create)
// PUT
router.put('/product/:id', ProductController.update)
// DELETE
router.delete('/product/:id', ProductController.delete)

module.exports = router