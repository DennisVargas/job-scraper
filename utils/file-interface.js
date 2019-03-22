const fs = require('fs');

const readFromFile = (filePathToRead, callback) => {
    fs.readFile(filePathToRead, (err, data) =>{
        if (err) return callback(err);
        // console.log("path to read: ", filePathToRead);
        // console.log("data: ", data.toString());
        callback(null, data);
    });
};

const writeToFile = (filePathToWrite, dataToWrite) =>{
    fs.writeFile(filePathToWrite, dataToWrite,(err)=>{
        if(err) throw err;
        console.log(filePathToWrite, "\nSaved!");
    });
};

module.exports = {
    readFromFile,
    writeToFile
};

