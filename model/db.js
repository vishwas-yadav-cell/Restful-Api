require('dotenv/config');
const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true
                , useUnifiedTopology: true
            }, () => {
                console.log(`Database Connected: ${mongoose.connection.host}`);
            });
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}