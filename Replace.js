//5. search for a particular text and replace it with new word
//6. write it back on file
//7. display again on the screen

var glob = require('glob');
var fs = require('fs');
var replace = require('replace');


glob('exe-1.txt', function(err, files) {
    if (err) 
    { 
        throw err; 
    }
    files.forEach(function(item, index, array) {
          console.log(item + ' found');
          //Display file content
          console.log(fs.readFileSync(item,'utf8'));
          // Find and Replace the string in file
          replace({
              regex: 'Hi',
              replacement: 'Hello',
              paths: [item],
              recursive: true,
              silent: true
          });
          console.log('Replacement complete');
          // Display file content
          console.log(fs.readFileSync(item,'utf8'));
      });
});
