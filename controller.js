var Book = require("../model/book")

exports.addToLibrary = (req,res) => {
    console.log(req.body)
    let book = new Book({
        id: req.body.id,
        titre: req.body.titre,
        auteur: req.body.auteur,
        nbPages: req.body.nbPages
    })

    book.save()
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
    Book.deleteOne({"id": id})
    .then((book) => console.log(book))
    .catch((err) => console.log(err.message))
}

exports.deleteByTitle = (req, res) => {
    let object = req.params.title
    Book.deleteOne({title: object})
}

exports.update = (req, res) => {
    let id = req.params.id
    let _id
    Book.findOne({"id": id}, {"_id": 1})
        .then((book) => _id = book._id )
        .then(() => {
            const bookUpdate = new Book({
                _id: _id,
                id: id,
                titre: req.body.titre,
                auteur: req.body.auteur,
                nbPages: req.body.nbPages
            })
            Book.updateOne({_id: _id}, bookUpdate).then( result => {
                console.log(result)
            }).catch((error) => {
                console.log(error)
            })
        })
        .catch((err) => console.error(err.message))
   
}

