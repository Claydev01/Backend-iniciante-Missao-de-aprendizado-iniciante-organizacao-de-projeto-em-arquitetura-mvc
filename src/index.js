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


  
  

  */

  app.listen(3000, function (){
    console.log('Servidor rodando em http:localhost:3000')
  })
 }

// Executamos a função main()
main()
