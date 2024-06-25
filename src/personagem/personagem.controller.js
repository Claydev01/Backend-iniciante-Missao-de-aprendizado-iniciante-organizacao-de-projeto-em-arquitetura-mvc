const service = require('./personagem.service')

async function readAll(res,res){
  const itens = await service.readAll()
  res.send(itens)
}


function readById(req,res){
  res.send('Read By ID')
}

function create(req,res){
  res.send('create By ID')
}

function updateById(req,res){
  res.send('Update By ID')
}

function deleteById(req,res){
  res.send('Delete By ID')
}
module.exports ={
  readAll,
  readById,
  create,
  updateById,
  deleteById
}