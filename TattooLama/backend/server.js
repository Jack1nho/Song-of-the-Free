const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const router = express.Router();
const exphbs = require("express-handlebars");
const slugify = require('slugify');

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CONNECTION TO MONGODB
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://gabrielegervasi:lamalama93@ds145474.mlab.com:45474/tattoolama", { useNewUrlParser: true })
.then(() => {
    console.log("DB OK");
})
.catch(err => (err));

//CONNESSIONE HANDLEBARS
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.resolve(__dirname, 'view/layouts'),
    partialsDir: path.resolve(__dirname, 'view/partials')
}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'view'));

//CONNESSIONE HANDLEBARS
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.resolve(__dirname, 'view/layouts'),
    partialsDir: path.resolve(__dirname, 'view/partials')
}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'view'));

//HOMEPAGE 
// app.get('/'), (req, res) => {

//     res.render("index");
// }

//SCHEMA TATUATORI
require("./models/tatuatori.js")
const tatuatori = mongoose.model("tatuatori")

//FORM DI INSERIMENTO - TATUATORI
app.get('/api/insert/tatuatori', (req, res) => {
    
    res.render("tattooform");

});

app.post('/api/insert/tatuatori', (req, res) => {

    tatuatori.create({ 
        name: req.body.name, 
        surname: req.body.surname, 
        biography: req.body.bio, 
        city: req.body.city, 
        address: req.body.street, 
        telephone: req.body.tele,
        working_email: req.body.email,
        private_email: req.body.private,
        cover: "images/tatuatori/cover/" + req.body.cover,
        image: "images/tatuatori/img/" + req.body.image,
        ranking_display: req.body.rank, 
        url: slugify(req.body.name + req.body.surname, { replacement: '-', remove: null, lower: true})}, function (error, result) {
            if(error) {
            return result.end(error)
        } else {
            console.log('Tatuatore inserito con successo')
            }
        });
    res.redirect('/getTattoers')
    //location.reload();
});

//API - MIGLIORI TATUATORI
app.get('/api/get/tatuatori/best', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    tatuatori.find({ranking_display: 1}, function(err, tatuatoriList){
      if(err){ console.log('error..'); } else {
          res.json(tatuatoriList);
      }
    }).limit(10).sort({_id: -1});
  });
  
  //API - ULTIMI TATUATORI
  app.get('/api/get/tatuatori/last', (req, res) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
      tatuatori.find({}, function(err, tatuatoriList){
        if(err){ console.log('error..'); } else {
            res.json(tatuatoriList);
        }
      }).limit(10).sort({_id: -1});
    });
    
  //VIEW TATUATORI 
  app.get('/getTattoers', (req, res) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
      tatuatori.find({}).limit(10).sort({_id: -1}).then(tatuatori =>{
          res.render("lastTattoers", {
              tatuatori: tatuatori
          })
      })
  });
  
  //MODIFICA TATUATORE
  app.get('/modificaTatuatore/:id', (req,res) => {
      tatuatori.findOne({
          _id: req.params.id
      }).then(tatuatori => {
          res.render("modificaTatuatore", {
              tatuatori: tatuatori
          });
      });
  });
  
  //CANCELLAZIONE TATUATORE
  app.delete('/getTattoers/:id', (req, res) => { 
      tatuatori.remove({
          _id: req.params.id
      }).then(tatuatori => {
          res.redirect('/getTattoers')
      });
  });
  

//SCHEMA TATTOO IMAGES
require("./models/tattooimages.js")
const tattooimages = mongoose.model("tattooimages")

// FORM DI INSERIMENTO - TATTOO IMAGES
app.get('/api/insert/tattooimages', (req, res) => {

    res.render("designform");

});

app.post('/api/insert/tattooimages', (req, res) => {

    tattooimages.create({
        
        name_design: req.body.design_name,
        associated_artist: req.body.associated, 
        price: req.body.price, 
        style: req.body.style,
        image: "images/design/" + req.body.image,
        url_design: slugify(req.body.design_name, { replacement: '-', remove: null, lower: true})}, function (error, result) {
        if(error) {
            return result.end(error)}
        else{
            return console.log("Tattoo image inserita con successo")
       }
    });

});

//API - ULTIME TATTOO IMAGES
app.get('/api/get/tattooimages/last', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    tattooimages.find({}, function(err, tattooimagesList){
      if(err){ console.log('error..'); } else {
          res.json(tattooimagesList);
      }
    }).limit(10).sort({_id: -1});
  
  });

//MODIFICA TATTOO DESIGN
app.get('/modificaDesign/:id', (req,res) => {
    tattooimages.findOne({
        _id: req.params.id
    }).then(tattooimages => {
        res.render("modificaDesign", {
            tattooimages: tattooimages
        });
    });
});
    
//CANCELLAZIONE TATTOO DESIGN
app.delete('/getTattooDesign/:id', (req, res) => { 
    tatuatori.remove({
        _id: req.params.id
    }).then(tatuatori => {
        res.redirect('/getTattooDesign')
    });
});

//VIEW DESIGN 
app.get('/getTattooDesign', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    tattooimages.find({}).limit(10).sort({_id: -1}).then(tattooimages =>{
        res.render("getTattooDesign", {
            tattooimages: tattooimages
        })
    })
});