const mongoose = require("mongoose")

const designSchema = mongoose.Schema({

    nome:{
        type: String,
        required: true
    },
    id_design:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
})

mongoose.model("design", designSchema)