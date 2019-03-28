const express = require('express');
const bodyParser = require('body-parser');
const Handlebars = require('handlebars');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const router = express.Router();
const exphbs = require("express-handlebars");
const override = require("method-override");
const slugify = require('slugify');
const httpProxy = require('http-proxy');
const multer = require('multer');
const fileUpload = require('express-fileupload');

app.use(fileUpload());

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//SENDINBLUE
var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = "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"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['api-key'] = "Token"

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix['partner-key'] = "Token"

var apiInstance = new SibApiV3Sdk.SMTPApi();

var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

//SCHEMA TATUATORI
require("./models/tatuatori.js")
const tatuatori = mongoose.model("tatuatori")

//SCHEMA TATTOO IMAGES
require("./models/tattooimages.js")
const tattooimages = mongoose.model("tattooimages")


// API BACKEND //

// CRUD TATTOERS  //

//FORM DI INSERIMENTO - TATUATORI
app.get('/api/insert/tatuatori', (req, res) => {

    res.render("tattooform");

});

app.post('/api/insert/tatuatori', (req, res) => {

    let imageUpload = req.files.image;
    let nomeFileImage = req.files.image.name;
    imageUpload.mv('public/images/tatuatori/img/' + nomeFileImage), function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!')
    };
    let coverUpload = req.files.cover;
    let nomeFileCover = req.files.cover.name;
    coverUpload.mv('public/images/tatuatori/cover/' + nomeFileCover), function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!')
    };
    let portfolioUpload = req.files.portfolio;
    let nomeFile = req.files.portfolio.name;
    portfolioUpload.mv('public/images/tatuatori/portfolio/' + nomeFile), function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!')
    };
    let portfolio1Upload = req.files.portfolio1;
    let nomeFile1 = req.files.portfolio1.name;
    portfolio1Upload.mv('public/images/tatuatori/portfolio/' + nomeFile1), function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!')
    };
    let portfolio2Upload = req.files.portfolio2;
    let nomeFile2 = req.files.portfolio2.name;
    portfolio2Upload.mv('public/images/tatuatori/portfolio/' + nomeFile2), function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!')
    };
    let portfolio3Upload = req.files.portfolio3;
    let nomeFile3 = req.files.portfolio3.name;
    portfolio3Upload.mv('public/images/tatuatori/portfolio/' + nomeFile3), function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!')
    };
    let portfolio4Upload = req.files.portfolio4;
    let nomeFile4 = req.files.portfolio4.name;
    portfolio4Upload.mv('public/images/tatuatori/portfolio/' + nomeFile4), function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!')
    },

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
            cover: nomeFileCover,
            image: nomeFileImage,
            portfolio: nomeFile,
            portfolio1: nomeFile1,
            portfolio2: nomeFile2,
            portfolio3: nomeFile3,
            portfolio4: nomeFile4,
            tattoo_studio: req.body.tattoo_studio,
            ranking_display: req.body.rank,
            title: req.body.title,
            meta_title: req.body.meta_title,
            hide: req.body.hide,
            url: slugify(req.body.name + ' ' + req.body.surname, { replacement: '-', separator: '-', remove: null, lower: true })
        }, function (error, result) {
            if (error) {
                return result.end(error)
            } else {
                console.log('Tatuatore inserito con successo')
            }
        });
    res.redirect('/getTattoers')
});

  //VIEW TATUATORI 
  app.get('/getTattoers', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    tatuatori.find({}).sort({_id: -1}).then(tatuatori =>{
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

//MOSTRA SINGOLO TATUATORE
app.get('/tattoer/profile/:id', (req,res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  tatuatori.findOne({
      _id: req.params.id
  }).then(tatuatori => { 
      res.render("profile", {
          tatuatori: tatuatori
      });
  });
});

//AGGIORNA TATUATORE
app.post('/getTattoers/:id', (req,res) => {
    
    if(req.files.image !== undefined){

        let imageUpload = req.files.image;
        let nomeFileImage = req.files.image.name;
        
        imageUpload.mv('public/images/tatuatori/img/' + nomeFileImage), function (err) {
            if (err)
                return res.status(500).send(err);

            res.send('File uploaded!')
        };
    }

    if(req.files.cover !== undefined){

        let coverUpload = req.files.cover;
        let nomeFileCover = req.files.cover.name;
        coverUpload.mv('public/images/tatuatori/cover/' + nomeFileCover), function (err) {
            if (err)
                return res.status(500).send(err);

            res.send('File uploaded!')
        };
    }

    if(req.files.portfolio !== undefined){
        let portfolioUpload = req.files.portfolio;
        let nomeFile = req.files.portfolio.name;
        portfolioUpload.mv('public/images/tatuatori/portfolio/' + nomeFile), function (err) {
            if (err)
                return res.status(500).send(err);

            res.send('File uploaded!')
        };
    }

    if(req.files.portfolio1 !== undefined){

    let portfolio1Upload = req.files.portfolio1;
    let nomeFile1 = req.files.portfolio1.name;
    portfolio1Upload.mv('public/images/tatuatori/portfolio/' + nomeFile1), function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!')
    };

    }

    if(req.files.portfolio2 !== undefined){

    let portfolio2Upload = req.files.portfolio2;
    let nomeFile2 = req.files.portfolio2.name;
    portfolio2Upload.mv('public/images/tatuatori/portfolio/' + nomeFile2), function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!')
    };

    }

    if(req.files.portfolio3 !== undefined){

    let portfolio3Upload = req.files.portfolio3;
    let nomeFile3 = req.files.portfolio3.name;
    portfolio3Upload.mv('public/images/tatuatori/portfolio/' + nomeFile3), function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!')
    };

    }

    if(req.files.portfolio4 !== undefined){

    let portfolio4Upload = req.files.portfolio4;
    let nomeFile4 = req.files.portfolio4.name;
    portfolio4Upload.mv('public/images/tatuatori/portfolio/' + nomeFile4), function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!')
    }

    }

    //AGGIORNO COVER SE E CAMBIATA
    if(req.files.image !== undefined){

        tatuatori.findOne({
            _id: req.params.id
        }).then(tatuatori => {
            tatuatori.cover= nomeFileCover
            tatuatori.save()
            .then(tatuatori=>{
                //res.redirect('/getTattoers');  
            });           
        });
    }

    //AGGIORNO IMMAGINE SE E CAMBIATA
    if(req.files.cover !== undefined){

        tatuatori.findOne({
            _id: req.params.id
        }).then(tatuatori => {
            tatuatori.image= nomeFileImage
            tatuatori.save()
            .then(tatuatori=>{
                //res.redirect('/getTattoers');  
            });           
        });
    }

    //AGGIORNO PORTFOLIO1 SE E CAMBIATA
    if(req.files.portfolio !== undefined){

        tatuatori.findOne({
            _id: req.params.id
        }).then(tatuatori => {
            tatuatori.portfolio= nomeFile
            tatuatori.save()
            .then(tatuatori=>{
                //res.redirect('/getTattoers');  
            });           
        });
    }

    //AGGIORNO PORTFOLIO2 SE E CAMBIATA
    if(req.files.portfolio1 !== undefined){

        tatuatori.findOne({
            _id: req.params.id
        }).then(tatuatori => {
            tatuatori.portfolio1 = nomeFile1
            tatuatori.save()
            .then(tatuatori=>{
                //res.redirect('/getTattoers');  
            });           
        });
    }

    //AGGIORNO PORTFOLIO3 SE E CAMBIATA
    if(req.files.portfolio2 !== undefined){

        tatuatori.findOne({
            _id: req.params.id
        }).then(tatuatori => {
            tatuatori.portfolio2 = nomeFile2
            tatuatori.save()
            .then(tatuatori=>{
                //res.redirect('/getTattoers');  
            });           
        });
    }

    //AGGIORNO PORTFOLIO3 SE E CAMBIATA
    if(req.files.portfolio3 !== undefined){

        tatuatori.findOne({
            _id: req.params.id
        }).then(tatuatori => {
            tatuatori.portfolio3 = nomeFile3
            tatuatori.save()
            .then(tatuatori=>{
                //res.redirect('/getTattoers');  
            });           
        });
    }

    //AGGIORNO PORTFOLIO4 SE E CAMBIATA
    if(req.files.portfolio4 !== undefined){

        tatuatori.findOne({
            _id: req.params.id
        }).then(tatuatori => {
            tatuatori.portfolio4 = nomeFile4
            tatuatori.save()
            .then(tatuatori=>{
                //res.redirect('/getTattoers');  
            });           
        });
    }

    //AGGIORNO DATI
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
        //tatuatori.cover= nomeFileCover
        //tatuatori.image= nomeFileImage,
        //tatuatori.portfolio= nomeFile,
        //tatuatori.portfolio1= nomeFile1,
        //tatuatori.portfolio2= nomeFile2,
        //tatuatori.portfolio3= nomeFile3,
        //tatuatori.portfolio4= nomeFile4,
        tatuatori.tattoo_studio= req.body.tattoo_studio,
        tatuatori.ranking_display= req.body.rank, 
        tatuatori.title= req.body.title,
        tatuatori.meta_title= req.body.meta_title,
        tatuatori.hide= req.body.hide,
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

// CRUD DESIGN //

// FORM DI INSERIMENTO - TATTOO IMAGES
app.get('/api/insert/tattooimages', (req, res) => {

    tatuatori.find({}).sort({_id: -1}).then(tatuatori =>{
        res.render("designform", {
            tatuatori: tatuatori
        })
    })
});

app.post('/api/insert/tattooimages', (req, res) => {

    let designUpload = req.files.image;
    let nomeFileDesign = req.files.image.name;
    designUpload.mv('public/images/Design/img/' + nomeFileDesign), function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!')
    },

    tattooimages.create({
        
        name_design: req.body.design_name,
        associated_artist: req.body.associated, 
        price: req.body.price, 
        style: req.body.style,
        altezza: req.body.altezza,
        larghezza: req.body.larghezza,
        image: nomeFileDesign,
        id_tattoer: req.body.selectpicker,
        hide: req.body.hide,
        data: Date(""),
        title: req.body.title,
        meta_title: req.body.meta_title,
        alt_tag: req.body.alt_tag,
        url_design: slugify(req.body.design_name, { replacement: '-', separator: '-', remove: null, lower: true})}, function (error, result) {
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

    var idTatuatore = req.params.id;
    tattooimages.findOne({ _id: "" + idTatuatore + "" },
        function (err, tattoodesign) {
            if (err) { console.log('error..'); } else {
                idTatuatore = tattoodesign.id_tattoer;
                tatuatori.find({},
                    function (err, tattoer) {
                        if (err) { console.log('error..'); } else {
                            tatuatori.findOne({ _id: "" + idTatuatore + "" }, function (err, tat) {
                                if (err) { console.log('error..'); } else {
                                    res.render("modificaDesign", {
                                        tatuatori: tattoer,
                                        tatuatoris: tat,
                                        tattooimages: tattoodesign
                                    })
                                }
                            })
                        }
                    })
            }
        })
});

//AGGIORNA TATTOO DESIGN
app.post('/getTattooDesign/:id', (req,res) => {

    if(req.files.image !== undefined){

        let designUpload = req.files.image;
        let nomeFileDesign = req.files.image.name;
        designUpload.mv('public/images/design/img/' + nomeFileDesign), function (err) {
            if (err)
                return res.status(500).send(err);

            res.send('File uploaded!')
        };
    
    }
    
    //AGGIORNO IMG SE E CAMBIATA
    if (req.files.image !== undefined) {

        tattooimages.findOne({
            _id: req.params.id
        }).then(tattooimages => {
            tattooimages.image = nomeFileDesign
            tattooimages.save()
                .then(tattooimages => {
                    //res.redirect('/getTattooDesign');  
                });
        });
    }

    tattooimages.findOne({
        _id: req.params.id
    }).then(tattooimages => {
        tattooimages.name_design= req.body.design_name,
        tattooimages.associated_artist= req.body.associated, 
        tattooimages.price= req.body.price, 
        tattooimages.style= req.body.style,
        tattooimages.altezza= req.body.altezza,
        tattooimages.larghezza= req.body.larghezza,
        // tattooimages.image= nomeFileDesign,
        tattooimages.id_tattoer= req.body.selectpicker,
        tattooimages.hide= req.body.hide,
        tattooimages.data= Date(""),
        tattooimages.title= req.body.title,
        tattooimages.meta_title=req.body.meta_title,
        tattooimages.alt_tag=req.body.alt_tag,
        tattooimages.url_design= slugify(req.body.design_name, { replacement: '-', separator: '-', remove: null, lower: true})
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
  
    tattooimages.find({}).sort({_id: -1}).then(tattooimages =>{
        res.render("getTattooDesign", {
            tattooimages: tattooimages
        })
    })
});

// API FRONTEND  //

// API - TATUATORI //

//API - MIGLIORI TATUATORI
app.get('/api/get/tatuatori/best', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    tatuatori.find({ranking_display: 1, hide: false}, function(err, tatuatoriList){
      if(err){ console.log('error..'); } else {
          res.json(tatuatoriList);
      }
    }).limit(10).sort({_id: -1});
  });
  
  //API - ULTIMI TATUATORI
  app.get('/api/get/tatuatori/all', (req, res) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
      tatuatori.find({hide: false}, function(err, tatuatoriList){
        if(err){ console.log('error..'); } else {
            res.json(tatuatoriList);
        }
      }).sort({_id: -1});
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
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    var id_t = req.params.id;
    tattooimages.find({ id_tattoer: "" + id_t + "" },
        function (err, tattoodesign) {
            if (err) { console.log('error..'); } else {
                res.json(tattoodesign);
            }
        })
});

// API - DESIGN //

//API - URL DESIGN
app.get('/api/get/design/:url', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var _url= req.params.url;
    tattooimages.findOne({url_design: _url}, function(err, tattooimages){
        if(err){ console.log('error..'); } else {
            res.json(tattooimages);
        }
    })
});

//API - ULTIME TATTOO IMAGES
app.get('/api/get/tattooimages/last', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    tattooimages.find({hide: false}, function(err, tattooimagesList){
      if(err){ console.log('error..'); } else {
          res.json(tattooimagesList);
      }
    }).limit(10).sort({data: 0});
  });

//API - TUTTE LE TATTOO IMAGES
app.get('/api/get/tattooimages/all', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    tattooimages.find({hide: false}, function(err, tattooimagesList){
      if(err){ console.log('error..'); } else {
          res.json(tattooimagesList);
      }
    }).sort({data: 0});
  
  });

// API - DA DESIGN A TATUATORE

app.get('/api/get/tatuatore/design/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var id_t = req.params.id;
    tattooimages.findOne({ _id: "" + id_t + "" },
        function (err, tattoodesign) {
            if (err) { console.log('error..'); } else {
                idTatuatore = tattoodesign.id_tattoer;
                tatuatori.findOne({_id: "" + idTatuatore + ""},
                    function (err, tattoer) {
                        if (err) { console.log('error..'); } else {
                            res.json(tattoer);
                        }
                    })
            }
        })
});