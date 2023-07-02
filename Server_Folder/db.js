const {MongoClient} =  require('mongodb')

let dbConnection;

module.exports = {
    connectToDb : (cb)=>{
        MongoClient.connect('mongodb+srv://Sreejan:Yash@hospital.tdnqrop.mongodb.net/data')
        .then((client)=>{
            dbConnection = client.db();
            return cb()
        })
        .catch(err=>{
            console.log(err)
            return cb(err)
        })
    } ,

    getDb : ()=> dbConnection
}