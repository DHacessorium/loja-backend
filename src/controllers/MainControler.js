const products = require('../database/products.json')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const MainController = {
  home: (req, res) => {
    res.render('home')
  },
  pulseiras: (req, res) => {
    res.render('pulseiras')
  },
  brincos: (req, res) => {
    res.render('brincos')
  },
  colares: (req, res) => {
    res.render('colares')
  },
  login: (req, res) => {
    res.render('login')
  },
  carrinho2: (req, res) => {
    res.render('carrinho2')
  },
  cadastro: (req, res) => {
    res.render('cadastro')
  },
  //   indexSegundo: (req, res) => {
  //   res.render('indexSegundo', {
  //     products,
  //     toThousand
  //   })
  // },
  infoProduto: (req, res) => {
    res.render('infoProduto')
  }




  // search: (req, res) => {
  //   let search = req.query.keywords
  //   let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search))
  //   res.render('results', {
  //     products: productsToSearch,
  //     search,
  //     toThousand,
  //   })
  // }
}
module.exports = MainController