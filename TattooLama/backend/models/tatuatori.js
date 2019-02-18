const mongoose = require("mongoose")

const tatuatoriSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    biography:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    cap:{
        type: Number,
        required: true 
    },
    provincia:{
        type: String,
        required: true
    },
    telephone:{
        type: String,
        required: true
    },
    working_email:{
        type: String,
        required: true
    },
    private_email:{
        type: String,
        required: true
    },
    cover:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    portfolio:{
        type: String,
        required: true,
    },
    tattoo_studio:{
        type: String,
        required: true
    },
    ranking_display:{
        type: Number,
        required: true 
    },
    title:{
        type: String,
        required: true
    },
    meta_title:{
        type: String,
        required: true
    },
    hide:{
        type: Boolean,
        required: true
    },
    url:{
        type: String,
        required: true
    }
})

mongoose.model("tatuatori", tatuatoriSchema)