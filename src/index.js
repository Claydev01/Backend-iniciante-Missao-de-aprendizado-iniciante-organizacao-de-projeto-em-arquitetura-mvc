require('dotenv').config()
const express = require('express')
const { connectTodatabase } = require('./db/database-connection')
const personagemRouter = require('./personagem/personagem.router')
//const { MongoClient, ObjectId } = require('mongodb')



// Declaramos a função main()
async function main() {
// FIX: utilizar connectToDatabase() e receber o DB 
 await connectTodatabase()
  
 // const collection = db.collection('personagem')

 const app = express()
  ///middlewares
  // Sinalizo para o Express que estamos usando JSON no Body
 app.use(express.json())


 app.get('/', function (req, res) {
    res.send('Hello World')
  })

  app.use('/personagem', personagemRouter)

// app.use('/personagem',  personagemRouter)
//FIX: mover isso para pasta 'personagem'
/*

 

 
  
 // Endpoint Create [POST] /personagem
  //app.post('/personagem', async function (req, res) {
   


 

   
  })


  // Endpoint Delete [DELETE] /personagem/:id
  app.delete('/personagem/:id', async function (req, res) {
    // Acessamos o parâmetro de rota
    const id = req.params.id

    // Checamos se o item do ID - 1 está na lista, exibindo
    // uma mensagem caso não esteja
    // if (!lista[id - 1]) {
    //   return res.status(404).send('Item não encontrado.')
    // }

    // Remover o item da collection usando o ID
    await collection.deleteOne({ _id: new ObjectId(id) })

    // Enviamos uma mensagem de sucesso
    res.send('Item removido com sucesso: ' + id)
  })
  */

  app.listen(3000, function (){
    console.log('Servidor rodando em http:localhost:3000')
  })
 }

// Executamos a função main()
main()
