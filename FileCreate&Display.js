//2. if file not present create it
//3. write some text in it
//4. display the text on screen

var fs = require('fs');
var checkFileExist=require("./FileCheck");


if (checkFileExist('example_file.txt'))
{
	console.log('File does exist');
}
else
{
	console.error('File does not exist');

	// Create the file and write some text in it
	console.log('\nCreating the file');
	fs.writeFileSync("example_file.txt", "Hello world!");

	//Display the text on screen
	fs.readFile('example_file.txt',function(err,data) 
        {
        	if(err)
    		{
        		return console.log(err);
    		}
    		console.log("File data: "+data.toString());
	});

}


/*
Output:

is not readable
File does not exist

Creating the file
File data: Hello world!
*/
