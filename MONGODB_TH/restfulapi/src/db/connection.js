const mongooose = require('mongoose');

//connection and creation of a new db if not present
mongooose.connect(`mongodb://localhost:27017/studentsApi`)  //studentsApi is the new database
.then( () => {
    console.log(`connection successful via mongoose`)
} )
.catch( (err) => {
    console.log(err)
})