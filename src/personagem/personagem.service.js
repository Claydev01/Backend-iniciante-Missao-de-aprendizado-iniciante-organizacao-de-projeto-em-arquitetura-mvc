const { ObjectId } = require('mongodb')
const { getDatabase } = require('../db/database-connection')

function getCollection(){
  //Acessamos a lista de personagem na collection do MongoDB
  return getDatabase().collection('personagem')
}
function readAll() {
  return getCollection().find().toArray()
}

/**
 * 
 * @param {string} id 
 * @returns 
 */

function readById(id) {
   // retorna o item na collection usando o ID
   return getCollection().findOne({ _id: new ObjectId(id) })
}

function create() {
}

function updateById() {
}

function deleteById() {
}
module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}