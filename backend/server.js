const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

//CONNECTION TO MONGODB
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://gabrielegervasi:lamalama93@ds145474.mlab.com:45474/tattoolama", { useNewUrlParser: true })
.then(() => {
    console.log("DB OK");
})
.catch(err => (err));

//SCHEMA TATUATORI
require("./models/tatuatori.js")
const tatuatori = mongoose.model("tatuatori")

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//FORM DI INSERIMENTO - TATUATORI
app.get('/insertTatuatori', (req, res) => {

    tatuatori.create({ name: 'Tatautore', surname: 'Di prova' }, function (error, result) {
       if(error) 
       return result.end(error);
    });

});

//API - ULTIMI TATUATORI
app.get('/api/tatuatori/last', (req, res) => {
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

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// FORM DI INSERIMENTO - TATTOO IMAGES
app.get('/insertTattooImages', (req, res) => {

    tattooimages.create({ price: '40€', style: 'Di prova' }, function (error, result) {
       if(error) 
       return result.end(error);
    });

});

//API - ULTIME TATTOO IMAGES
app.get('/api/tattooimages/last', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    tattooimages.find({}, function(err, tattooimagesList){
      if(err){ console.log('error..'); } else {
          res.json(tattooimagesList);
      }
    }).limit(10).sort({_id: -1});
  
  });
  