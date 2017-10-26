
const fs = require('fs');

let stream = fs.createReadStream(process.argv[2])

// data event fires whhen new data is ready

stream.on('data',(chunk) => {
	console.log(chunk.toString());
	console.log(chunk);
});

stream.on('error',(err)=> {
	console.log(err);

});

//no more data to stream

stream.on('end',()=> {
	console.log('finished reading file')
	stream.close();
});