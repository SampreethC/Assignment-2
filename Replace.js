//5. search for a particular text and replace it with new word
//6. write it back on file
//7. display again on the screen

var glob = require('glob');
var fs = require('fs');
var checkFileExist=require("./FileCheck");
var replace = require('replace');


if (checkFileExist('example_file1.txt'))
{
	console.log('File does exist');

        // Find file(s)
        glob('example_file1.txt', function(err, files) {
            if (err) { throw err; }
                files.forEach(function(item, index, array) {
                console.log(item + ' found');
			
                // Read file
                console.log(fs.readFileSync(item,'utf8'));
			
                // Find and Replace string
                replace({
                	regex: 'Hello',
                        replacement: 'Hi',
                        paths: [item],
                        recursive: true,
                        silent: true
                });
                console.log('Replacement complete');
			
                // Read file
                console.log(fs.readFileSync(item,'utf8'));
                });
        });
}
else
{
	console.error('File does not exist');
}


/*
Output:

can read/write
File does exist
example_file1.txt found
Hello Friends...
Replacement complete
Hi Friends...
*/
