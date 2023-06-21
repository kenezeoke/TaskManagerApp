import mongoose from 'mongoose';

const connectdb = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }
    )
}

export default connectdb
