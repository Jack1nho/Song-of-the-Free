const mongoose = require("mongoose")

const tattooImagesSchema = mongoose.Schema({
    name_design:{
        type: String,
        required: false
    },
    associated_artist:{
        type: String,
        required: false
    },
    price:{
        type: Number,
        required: false
    },
    style:{
        type: String,
        required: false
    },
    altezza:{
        type: String,
        required: false
    },
    larghezza:{
        type: String,
        required: false
    },
    image:{
        type: String,
        required: false
    },
    id_tattoer: {
        type: String,
        required: false
    },
    hide:{
        type: Boolean,
        required: false
    },
    data:{
        type: Date,
        required: false
    },
    title:{
        type: String,
        required: false
    },
    meta_title:{
        type: String,
        required: false
    },
    alt_tag:{   
        type: String,
        required: false
    },
    url_design:{
        type: String,
        required: false
    }
})

mongoose.model("tattooimages", tattooImagesSchema)