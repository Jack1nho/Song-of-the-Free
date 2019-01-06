const mongoose = require("mongoose")

const tattooImagesSchema = mongoose.Schema({
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
    }
})

mongoose.model("tattooimages", tattooImagesSchema)