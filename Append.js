//8. if the file with text written is already present then append text to next line

//append

var fs=require("fs");

try
{
    fs.appendFile('example_file1.txt','See U Later...',function(err) 
    {
        if(err)
        {
            return console.log(err);
        }
    });
}
catch(err)
{
    console.log(err);
}
