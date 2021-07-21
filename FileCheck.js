//1. Check if the file is present or not.


var fs = require('fs');

const checkFileExist = file =>{
	try
	{
	  	fs.accessSync(file, fs.constants.R_OK);
	  	console.log('can read/write');
	  	return true;
	}
	catch (err)
	{
		console.error('is not readable');
		return false;
	}
  };
  
module.exports=checkFileExist;

