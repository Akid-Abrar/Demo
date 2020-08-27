const mongoose=require('mongoose');


const resultSchema = mongoose.Schema({
    id : Number,
     
})

module.exports = mongoose.model('results', resultSchema);