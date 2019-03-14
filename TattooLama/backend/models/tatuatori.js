const mongoose = require("mongoose")

const tatuatoriSchema = mongoose.Schema({
    name:{
        type: String,
        required: false
    },
    surname:{
        type: String,
        required: false
    },
    biography:{
        type: String,
        required: false
    },
    city:{
        type: String,
        required: false
    },
    address:{
        type: String,
        required: false
    },
    cap:{
        type: Number,
        required: false 
    },
    provincia:{
        type: String,
        required: false
    },
    telephone:{
        type: String,
        required: false
    },
    working_email:{
        type: String,
        required: false
    },
    private_email:{
        type: String,
        required: false
    },
    cover:{
        type: String,
        required: false,
    },
    image:{
        type: String,
        required: false,
    },
    portfolio:{
        type: String,
        required: false,
    },
    portfolio1:{
        type: String,
        required: false,
    },
    portfolio2:{
        type: String,
        required: false,
    },
    portfolio3:{
        type: String,
        required: false,
    },
    portfolio4:{
        type: String,
        required: false,
    },
    tattoo_studio:{
        type: String,
        required: false
    },
    ranking_display:{
        type: Number,
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
    hide:{
        type: Boolean,
        required: false
    },
    url:{
        type: String,
        required: false
    }
})

mongoose.model("tatuatori", tatuatoriSchema)