//1. Check if the file is present or not
//2. if not present create it
//3. write some text in it
//4. display the text on screen


var fs = require('fs');

// Test the if the file exists
fs.access('example_file2.txt', fs.constants.F_OK, (err) =>{
	console.log('\n>Checking if the file exists');

	if (err) 
	{
		console.error('File does not exist');

		// Create the file and write some text in it
		console.log('\nCreating the file');
		fs.writeFileSync("example_file2.txt", "Hello world!");

	    // Test the if the file exists again
	    fs.access('example_file2.txt', fs.constants.F_OK, (err) => {
	    	console.log('\n> Checking if the file exists');
	    	if (err)
	    	{
				console.error('File does not exist');
			}
			else 
			{
				console.log('File does exist');
				//Display the text on screen
				fs.readFile('example_file2.txt',function(err,data) 
        		{
        			if(err)
    				{
        				return console.log(err);
    				}
    				console.log("File data: "+data.toString());
				});

			}
		});
	}
	else
	{
		console.log('File does exist');	
	}
});
