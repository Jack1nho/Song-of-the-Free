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
    ranking_display:{
        type: Number,
        required: true 
    }
})

mongoose.model("tatuatori", tatuatoriSchema)