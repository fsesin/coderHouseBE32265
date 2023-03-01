import mongoose, { mongo } from "mongoose";

const coursesSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Students',
            default: []
        }
    ]
})

coursesSchema.pre('find',function(next){
    this.populate('students')
    next()
})

export const coursesModel = mongoose.model('Courses',coursesSchema)