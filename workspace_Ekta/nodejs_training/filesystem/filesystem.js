const fs = require("fs");

console.log("Going to open file!");
fs.open('filesystem/filesystem.js','r+',(err,fd) => {
	if(err) {
		return console.error(err);
	}
	console.log('file opened successfully!');
	});

// Asynchronus read Non Blocking
fs.readFile('filesystem/filesystem.js', function(err,data) {
	if (err){
		return console.error(err);
	}

	console.log("Asynchronus reading:" + data.toString());
		
});

// synchronus read Blocking

var data = fs.readFileSync('filesystem/filesystem.js');
console.log("synchronus reading:" + data.toString());