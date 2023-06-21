import {model, Schema} from 'mongoose';

const TaskSchema = new Schema( {
    name : {
        type:String,
        required: true,
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },

    completed: {
        type:Boolean,
        default: false
    }

}, {
    collection: 'tasks',
    timestamps: true
})

export default model('Task', TaskSchema)
   
