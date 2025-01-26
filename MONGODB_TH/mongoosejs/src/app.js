const mongoose=require('mongoose');
const validator=require('validator');
//connection and creation of a new db if not present
mongoose.connect("mongodb://localhost:27017/mongo_learning")
.then( () => console.log("connection successful...."))
.catch((err) => console.log(err))


const playlistSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            minLength:[2,"minimum 2 letters"],
            maxLength:30
        },
        ctype:{
            type:String,
            required:true,
            lowercase:true,
            enum:["frontend","backend","database","react js","frontend js"]
        },
        videos:{
            type:Number,
            validate(value){
                if(value<0) throw new Error(`videos count cann't be negative`);
            }


            // validate:{
            //     validator:function(value){
            //         return value.length<0 
            //     },
            //     message:`videos count cann't be negative`
            // }
        },
        author:String,
        email:{
            type:String,
            required:true,
            unique:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Email is invalid")
                }
            }
            
        },
        active:Boolean,
        date:{
            type:Date,
            default:Date.now
        }
    }
)

const Playlist = new mongoose.model("Playlist",playlistSchema);


//create document or insert

const createDocument = async () => {
    try{
        const reactPlaylist = new Playlist(  //these are document document 
            {
                name:"react js",
                ctype:"frontend",
                videos:80,
                email:"akp@gmail.com",
                author:"TT",
                active:true,
            }
        )
        
        const angularPlaylist = new Playlist({
            name: "Angular.js Essentials",
            ctype: "frontend",
            videos: 70,
            email:"akp@gmail.com",
            author: "TT",
            active: true,
        });

        const mongodbPlaylist = new Playlist({
            name: "MongoDB Masterclass",
            ctype: "database",
            videos: 50,
            email:"akp@gmail.com",
            author: "TT",
            active: true,
        });

        const expressPlaylist = new Playlist({
            name: "Express.js Fundamentals",
            ctype: "backend",
            videos: 40,
            email:"akp@gmail.com",
            author: "TT",
            active: true,
        });

        const jsPlaylist = new Playlist({
            name: "js Fundamentals",
            ctype: "frontend js",
            videos: 30,
            email:"akp@gmail.com",
            author: "TT",
            active: true,
        });

        
        const result=await Playlist.insertMany([reactPlaylist,angularPlaylist,expressPlaylist,mongodbPlaylist,jsPlaylist]);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

//createDocument();

const getDocument = async () => {
    // const result = await Playlist.find();
    // console.log(result);
    

    //find
    // const result1 = await Playlist.find({ctype:"backend"})
    // .select({name:1});
    // console.log(result1);


    //comparison
    // const ak=await Playlist
    // .find({videos:{$gte:50}}); //gt , gte , lt , lte 
    // console.log(ak)


    //in and nin
    // const akp=await Playlist
    // .find({ctype: {$in:["backend","frontend"]}}); //nin
    // console.log(akp);


    //and or 
    // const result=await Playlist
    // .find({$or: [ {ctype:"backend"} , {author:"TT"} ]}); //and
    // console.log(result);
    

    //counting
    // const result=await Playlist
    // .find({$and: [ {ctype:"backend"} , {author:"TT"} ]})
    // .select({name:1})
    // .countDocuments()
    // console.log(result);


    //sort
    // const result=await Playlist
    // .find( {author:"TT"} )
    // .select({name:1})
    // .sort({name:1})
    // console.log(result);
}

//getDocument();


//update the documents
const updateDocument = async (id) => {
    try {
        const result = await Playlist.findByIdAndUpdate(  //updateOne
            {_id:id},
            {
                $set:{
                    name:"JavaScript_Fundamentals"
                }
            },
            {
                new:true, //then it gives the new document rather than the old one
                useFindAndModify:false
            }
        )
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}

//updateDocument("67833ac3262967c613d4667b")



//delete the document


const deleteDocument = async (_id) => {
    try {
        const result = await Playlist.findByIdAndDelete( //deleteOne
            {_id}
        );
        console.log(result)
    } catch (error) {
        console.log(error);
    }
}

//deleteDocument("678340fe87bf93283dada2f5")