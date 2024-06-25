const { MongoClient } = require('mongodb')

// Preparamos as informações de acesso ao banco de dados
const dbUrl = process.env.DATABASE_URL
const dbName = 'mongodb-arquitetura-mvc'


async function connectTodatabase() {
  // Realizamos a conexão com o banco de dados
  const client = new MongoClient(dbUrl)
  console.log('Conectando ao banco de dados...')
  await client.connect()
  console.log('Banco de dados conectado com sucesso!')

  const db = client.db(dbName)
  // FIXME: usar o db de alguma forma
}

module.exports ={
  connectTodatabase
}