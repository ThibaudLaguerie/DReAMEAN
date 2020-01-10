var Book = require("../model/book")

exports.addToLibrary = (req,res) => {
    let book = new Book({
        id: req.body.id,
        titre: req.body.titre,
        auteur: req.body.auteur,
        nbPages: req.body.nbPages
    })

    book.save()
    .then((book) => res.send(book))
    .catch((err) => err.message)
}

exports.find = (req,res) => {
    Book.find({}, {"_id": 0,"titre": 1})
    .then((books) => res.send(books))
    .catch((err) => console.error(err.message))
}

exports.findOne = (req, res) => {
    console.log('Params: ', req.params) 
    Book.findOne({"id": req.params.id})
    .then((book) =>  res.send(book))
    .catch((err) => console.error(err.message))
}

exports.findNbPages = (req, res) => {
    Book.findOne({"id": req.params.id}, {"_id": 0, "nbPages": 1})
        .then((book) => res.send(book))
        .catch((err) => console.error(err.message))
}

exports.delete = (req, res) => {
    let id = req.params.id
    console.log(id)
    Book.deleteOne({"id": id})
    .then((book) => console.log(book))
    .catch((err) => console.log(err.message))
}

exports.deleteByTitle = (req, res) => {
    let object = req.params.title
    Book.deleteOne({title: object})
}

