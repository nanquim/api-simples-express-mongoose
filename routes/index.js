const express = require('express');
const router = express.Router();


//importa controller
const BooksController = require('../controllers');


//Pega todos os livros
router.get('/books', BooksController.getBooks);

//Pega produto por id
router.get('/books/:id', BooksController.getBookById);

//Cria novo livro
router.post('/books', BooksController.createBook);

//Atualiza um Livro
router.put('/books/:id', BooksController.updateBook);

//Delete um produto
router.delete('/books/:id', BooksController.deleteBooks);


module.exports = router;
