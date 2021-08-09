const mongoose = require('mongoose');
//mongoose.set('debug', true);


// Define o schema
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        //TODO UNICO
    },
    publishedAt: { //TODO APENAS O ANO
        type: Date,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    image: {
        type: String, // TODO
        required: false,
    }

});

// Compila o modelo a partir do schema 
// obs.: model precisa ter o mesmo nome da collection
module.exports = mongoose.model('books', BookSchema);
