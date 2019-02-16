const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const router = express.Router();
const exphbs = require("express-handlebars");
const override = require("method-override");
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

//OVERRIDE
app.use(override('_method'));

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
        provincia: req.body.provincia,
        address: req.body.street, 
        cap: req.body.cap,
        telephone: req.body.tele,
        working_email: req.body.email,
        private_email: req.body.private,
        cover: "images/tatuatori/cover/" + req.body.cover,
        image: "images/tatuatori/img/" + req.body.image,
        tattoo_studio: req.body.tattoo_studio,
        ranking_display: req.body.rank, 
        title: req.body.title,
        meta_title: req.body.meta_title,
        url: slugify(req.body.name + ' ' + req.body.surname, { replacement: '-', separator: '-', remove: null, lower: true})}, function (error, result) {
            if(error) {
            return result.end(error)
        } else {
            console.log('Tatuatore inserito con successo')
            }
        });
    res.redirect('/getTattoers')
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
  app.get('/api/get/tatuatori/all', (req, res) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
      tatuatori.find({}, function(err, tatuatoriList){
        if(err){ console.log('error..'); } else {
            res.json(tatuatoriList);
        }
      }).sort({_id: -1});
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

//AGGIORNA TATUATORE
app.post('/getTattoers/:id', (req,res) => {
    tatuatori.findOne({
        _id: req.params.id
    }).then(tatuatori => {
        tatuatori.name= req.body.name, 
        tatuatori.surname= req.body.surname, 
        tatuatori.biography= req.body.bio, 
        tatuatori.city= req.body.city, 
        tatuatori.provincia= req.body.provincia,
        tatuatori.address= req.body.street,
        tatuatori.cap= req.body.cap, 
        tatuatori.telephone= req.body.tele,
        tatuatori.working_email= req.body.email,
        tatuatori.private_email= req.body.private,
        tatuatori.cover= "images/tatuatori/cover/" + req.body.cover,
        tatuatori.image= "images/tatuatori/img/" + req.body.image,
        tatuatori.ranking_display= req.body.rank, 
        tatuatori.title= req.body.title,
        tatuatori.meta_title= req.body.meta_title,
        tatuatori.url= slugify(req.body.name + ' ' + req.body.surname, { replacement: '-', separator: '-', remove: null, lower: true})
        
        tatuatori.save()
        .then(tatuatori=>{
            res.redirect('/getTattoers');  
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

//API - URL TATTOER
app.get('/api/get/tatuatore/:url', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    var _url= req.params.url;
    tatuatori.findOne({url: _url}, function(err, tatuatore){
        if(err){ console.log('error..'); } else {
            res.json(tatuatore);
        }
    })
});

// API - ALL TATTOO DESIGN
app.get('/api/get/design/tatuatore/:id', (req, res) => {
    var id_t = req.params.id;
    tattooimages.find({ id_tattoer: "" + id_t + "" },
        function (err, tattoodesign) {
            if (err) { console.log('error..'); } else {
                res.json(tattoodesign);
                console.log(typeof id_t);
            }
        })
});

//SCHEMA TATTOO IMAGES
require("./models/tattooimages.js")
const tattooimages = mongoose.model("tattooimages")

// FORM DI INSERIMENTO - TATTOO IMAGES
app.get('/api/insert/tattooimages', (req, res) => {

    tatuatori.find({}).sort({_id: -1}).then(tatuatori =>{
        res.render("designform", {
            tatuatori: tatuatori
        })
    })
});

app.post('/api/insert/tattooimages', (req, res) => {

    tattooimages.create({
        
        name_design: req.body.design_name,
        associated_artist: req.body.associated, 
        price: req.body.price, 
        style: req.body.style,
        altezza: req.body.altezza,
        larghezza: req.body.larghezza,
        image: "images/design/" + req.body.image,
        id_tattoer: req.body.selectpicker,
        data: Date(""),
        title: req.body.title,
        meta_title: req.body.meta_title
        
        }, function (error, result) {
        if(error) {
            return (error)}
        else{
            return console.log("Tattoo image inserita con successo")
       }
    });
    res.redirect('/getTattooDesign')
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

//AGGIORNA TATTOO DESIGN
app.post('/getTattooDesign/:id', (req,res) => {
    tattooimages.findOne({
        _id: req.params.id
    }).then(tattooimages => {
        tattooimages.name_design= req.body.design_name,
        tattooimages.associated_artist= req.body.associated, 
        tattooimages.price= req.body.price, 
        tattooimages.style= req.body.style,
        tattooimages.altezza= req.body.altezza,
        tattooimages.larghezza= req.body.larghezza,
        tattooimages.image= "images/design/" + req.body.image,
        tattooimages.id_tattoer= req.body.selectpicker,
        tattooimages.data= Date(""),
        tattooimages.title= req.body.title,
        tattooimages.meta_title=req.body.meta_title,
        tattooimages.save()
        .then(tattooimages=>{
            res.redirect('/getTattooDesign');  
        });           
    });
});
    
//CANCELLAZIONE TATTOO DESIGN
app.delete('/getTattooDesign/:id', (req, res) => { 
    tattooimages.remove({
        _id: req.params.id
    }).then(tattooimages => {
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

//API - URL DESIGN
app.get('/design/:url', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var _url= req.params.url;
    tattooimages.findOne({url_design: _url}, function(err, tattooimages){
        if(err){ console.log('error..'); } else {
            res.json(tattooimages);
        }
    })
});



//SCHEMA DESIGN
require("./models/design.js")
const design = mongoose.model("design")

//API - ULTIME TATTOO IMAGES
app.get('/api/get/tattooimages/last', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    tattooimages.find({}, function(err, tattooimagesList){
      if(err){ console.log('error..'); } else {
          res.json(tattooimagesList);
      }
    }).limit(10).sort({data: 0});
  
  });

//API - ULTIME TATTOO IMAGES
app.get('/api/get/tattooimages/all', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    tattooimages.find({}, function(err, tattooimagesList){
      if(err){ console.log('error..'); } else {
          res.json(tattooimagesList);
      }
    }) 
  
  });