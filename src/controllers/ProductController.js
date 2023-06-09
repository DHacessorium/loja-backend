const products = require('../database/products.json')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const ProductController = {
  showAll(req, res) {
    res.json(products)
  },
  showById(req, res) {
    const { id } = req.params
    
    const product = products.find(product => String(product.id) === id)
  
    if (product)
        return res.json(product)
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },
  create(req, res) {
    products.push(req.body)
    res.json(products)
  },
  update(req, res) {
    const { id } = req.params
    
    const productIndex = products.findIndex(product => String(product.id) === id)
  
    if (productIndex != -1) {
        products[productIndex] = req.body
        return res.json(products)
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },
  delete(req, res) {
    const { id } = req.params
    
    const productIndex = products.findIndex(product => String(product.id) === id)
  
    if (productIndex != -1) {
        products.splice(productIndex, 1)
        return res.json(products)
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },

  //Trazer informações do produto pelo ID
  infoProduto: (req, res) => {
		let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('infoProduto', {
			product,
			toThousand
		})
	},
  // Create form product - View
  criarProduto: (req, res) => {
    res.render('criarProduto')
  },
  // Create product
  PostProduto: (req, res) => {
    let newProduct = {
			id: Number(products[products.length - 1].id) + 1,
			...req.body,
      image: 'default-image.png'
		}
    products.push(newProduct)
    res.redirect('/')
  },
}



module.exports = ProductController