var express = require('express');
var router = express.Router();
var controller = require("../controller/controller");
var Book = require("../model/book");

/**
 * Body parser
 */

let library = "Base de donnée"


/** Home **/

router.get('/',function(req,res) {
    res.send('API de gestion des livres');
    })
// DONE
/** Liste Livre **/    

router.get('/livres',function(req,res) {
    controller.find(req,res)

    })
// DONE
/** Profile livre **/

router.get('/livres/:id',function(req,res) {
    var numeroLivre = req.params.id;
    console.log(numeroLivre);
    controller.findOne(req, res)
    })
// DONE
/** Liste pages **/

router.get('/livres/:id/pages',function(req,res) {
    var id = req.params.id;
    controller.findNbPages(req, res)
    })
// DONE
/** Profile page **/

router.get('/livres/:id/pages/:nbPages',function(req,res) {
    var id = req.params.id;
    var nbPages = req.params.nbPages;
    res.send('Pages ' +nbPages+ ' du livres n°' + id);
    })    
// NOT USEFUL YET

router.post('/livres', function(req,res) {
    res.send('Ajout d\'un livre');
    controller.addToLibrary(req, res)
    })  
// DONE

router.delete('/livres/:id',function(req,res) {
    res.send('Suppression d\'un livre')
    controller.delete(req,res)
    })  

router.delete('/livres/:title',function(req,res) {
    res.send('Suppression d\'un livre by title')
    controller.deleteByTitle(req,res)
    })  

router.put('/livres/',function(req,res) {
    var id = req.params.id;
    res.send('Mise à jour de la liste des livres');
    })  

module.exports = router


