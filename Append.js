//8. if the file with text written is already present then append text to next line

//append

var fs = require('fs');
var checkFileExist=require("./FileCheck");


if (checkFileExist('example_file1.txt'))
{
	console.log('File does exist');
    try
    {   
        // Get the file contents before the append operation
        console.log("\nFile Contents of file before append:",
        fs.readFileSync("example_file1.txt", "utf8"));

        fs.appendFile('example_file1.txt','Iam going to create file...',function(err) 
        {
            if(err)
            {
                return console.log(err);
            }
            else
            {
                // Get the file contents after the append operation
                console.log("\nFile Contents of file after append:",
                fs.readFileSync("example_file1.txt", "utf8"));
            }
        });


    }
    catch(err)
    {
        console.log(err);
    }
}
else
{
	console.error('File does not exist');

}


/*
Output:

can read/write
File does exist

File Contents of file before append: Hi Friends...

File Contents of file after append: Hi Friends...Iam going to create file...

*/