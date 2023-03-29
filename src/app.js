const routes = require('./routes/index')
const express = require('express')
const path = require("path")
const app = express()
const ejs = require("ejs")
const methodOverride = require('method-override') // permite uso dos métodos PUT e DELETE

// métodos PUT e DELETE
app.use(methodOverride('_method'))


// instanciando como view engine
app.set("view engine", "ejs")

//indexando Título do site e botoes da tela cadastro
app.get('/', function(req,res){
  res.render('home',{title: 'DH-Acessorium'});
  // res.render('home', { pageTitle: 'Cadastre-se', buttonLabel: 'Enviar' });
});
// instanciando pasta views
app.set("views", path.resolve("src", "views"))
// liberando acesso a pasta public
app.use(express.static(path.resolve("public")))

app.use(routes)

app.listen(3000, () => {
  console.log('Servidor Rodando!')
})