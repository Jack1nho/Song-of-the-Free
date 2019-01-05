const mongoose = require("mongoose")
//const mongoose = require("tatuatori")

const tattooimagesSchema = mongoose.Schema({
    associated_artist:{
        
    },
    price:{
        type: String,
        required: true
    },
    style:{
        type: String,
        required: true
    }
})

mongoose.model("tattooimages", tattoimagesSchema)