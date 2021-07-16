//8. if the file with text written is already present then append text to next line

//append

var fs=require("fs");

try
{
    fs.appendFile('exe-1.txt','See U Later...',function(err) 
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
