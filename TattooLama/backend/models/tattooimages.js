const mongoose = require("mongoose")

const tattooImagesSchema = mongoose.Schema({
    name_design:{
        type: String,
        required: true
    },
    associated_artist:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    style:{
        type: String,
        required: true
    },
    url_design:{
        type: String,
        required: true
    }
})

mongoose.model("tattooimages", tattooImagesSchema)