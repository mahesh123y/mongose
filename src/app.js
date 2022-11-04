const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongoosejs").then(()=> {
    console.log("connection is successful");
}).catch(()=> {
    console.log("Not connection");
});

// Schema
//A mongoose schema defines the structure of the documents, default value, validators etc

const playSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date:{
        type: Date,
        default: Date.now
    }
});


// Collection creation
const playlist = new mongoose.model("Option", playSchema);

//create document

const createDocument = async()=>{
    try{
        const jsPlaylist = new playlist({
            name: "Javascript",
            ctype: "Front End",
            videos: 12,
            author: "Mahesh Yadav",
            active: true
        })

        const mongodbPlaylist = new playlist({
            name: "MongoDB",
            ctype: "Database",
            videos: 11,
            author: "Mahesh Yadav",
            active: true
        })

        const mongoosePlaylist = new playlist({
            name: "Mongoose",
            ctype: "Database",
            videos: 22,
            author: "Mahesh Yadav",
            active: true
        })

        const expressPlaylist = new playlist({
            name: "Express Js",
            ctype: "Backend End",
            videos: 30,
            author: "Mahesh Yadav",
            active: true
        });
        
        const result = await playlist.insertMany([jsPlaylist, mongodbPlaylist, mongoosePlaylist, expressPlaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
    
};
//createDocument();


// Read the Document

const getData = async()=> {
    const result = await playlist.find();
    //const result = await playlist.find({ctype: "Front End"}).select({name:1});
    console.log(result);
}

getData();