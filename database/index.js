const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();


exports.connect = () => {
     mongoose
    .connect(process.env.MONGO_URI, { 
             useNewUrlParser: true, 
             useUnifiedTopology: true, 
             useFindAndModify: false })
    .then(res => console.log('Conexão com MondoDB estabelecida com sucesso'))
    .catch(err => console.log(`Erro na conexão com MongoDB ${err}`));
}
