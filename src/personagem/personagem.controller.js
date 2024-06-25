function readAll(res,res){
  res.send('Read All')
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