const BookModel = require("../models");


exports.getBooks = async (req, res) => {
    const books = await BookModel.find({});
    //console.log(books)
    res.json(books);
}

exports.getBookById = async (req, res) => {
    const id = req.params.id
    const book = await BookModel.findById(id).exec();
    //console.log(book)
    res.json(book);
}

exports.createBook = (req, res) => {
    console.log(req.body)
    //console.log(req.query)
    const book = new BookModel({
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        publishedAt: req.body.publishedAt,
        image: req.body.image    
    });

    book.save((error, book) => {
        if(error) return console.error(error);
        res.send(`Novo livro salvo com sucesso ${book}`);
    });
}

exports.updateBook = (req, res) => {
    
    const id = req.params.id;
    const obj = JSON.parse(JSON.stringify(req.body));
   
    BookModel.findByIdAndUpdate(id, obj, (error, document) => {
        if(error) res.send(error);
        //res.send(document);
        res.send('Atualizado com sucesso')
    })
}

exports.deleteBooks = (req, res) => {
    BookModel.findByIdAndRemove(req.params.id, (error) => {
        if(error) res.send(error);
        res.send('Removido com sucesso');
    })
}
