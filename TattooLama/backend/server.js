const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const router = express.Router();
const exphbs = require("express-handlebars");

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
        cover: req.body.cover,
        image: req.body.image,
        ranking_display: req.body.rank }, function (error, result) {
            if(error) {
            return result.end(error)
        } else {
            console.log('Tatuatore inserito con successo')
            }
        });

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

//SCHEMA TATTOO IMAGES
require("./models/tattooimages.js")
const tattooimages = mongoose.model("tattooimages")

// FORM DI INSERIMENTO - TATTOO IMAGES
app.get('/api/insert/tattooimages', (req, res) => {

    res.render("designform");

});

app.post('/api/insert/tattooimages', (req, res) => {

    tattooimages.create({
        
        associated_artist: req.body.associated, 
        price: req.body.price, 
        style: req.body.style }, function (error, result) {
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
  