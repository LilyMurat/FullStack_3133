console.log("Week 02 - File Handling")

//import the fs (inbuild) module for read the file 
//import { readFile } from "fs"
var fs = require("fs")

//read the csv file
// async -> console.log("------Start-----") -> wait the text
fs.readFile("input_countries.csv", (err, data)=>{
    if(err){
        console.log(err) //if data is not available, through error
        return
    }
    console.log(data.toString()) //convert the byte(buffer) to string 
})
//console.log("------End-----")

//sync -> don't wait for the text 

//r -> read only
//r+ -> read + write
//w -> only write
//w+ -> write + read
//a -> append
//ws -> write sync
//async, r+ mode, fd -> file descriptor

// Open the input_countries.csv file
var csv = require('csv-parser');
fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (data) => {
    //Filter data of Canada and write data to canada.txt
    if (data.country === 'Canada') {
      fs.appendFileSync('canada.txt', `${data.country},${data.year},${data.population}\n`);
    }
    //Filter data of United States and write data to usa.txt
    if (data.country === 'United States') {
      fs.appendFileSync('usa.txt', `${data.country},${data.year},${data.population}\n`);
    }
  });
