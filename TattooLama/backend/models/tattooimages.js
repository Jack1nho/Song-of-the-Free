const mongoose = require("mongoose")

const tattooImagesSchema = mongoose.Schema({
    name_design:{
        type: String,
        required: true
    },
    associated_artist:{
        type: String,
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
    altezza:{
        type: String,
        required: true
    },
    larghezza:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    id_tattoer: {
        type: String,
        required: true
    },
    data:{
        type: Date,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    meta_title:{
        type: String,
        required: true
    }
})

mongoose.model("tattooimages", tattooImagesSchema)