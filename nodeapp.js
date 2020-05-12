const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");

jsonpath = './json/CLassC.json';
csvpath = './csv/CLassC.csv'

CSVToJSON().fromFile(csvpath).then(source => {
    console.log(source);
    let json = JSON.stringify(source);


    FileSystem.access(jsonpath, FileSystem.F_OK, (err) => {
        if (err) {
          console.error(err)
          return
        }
      
        //file exists
        FileSystem.unlinkSync(jsonpath)
        console.log("If old file exists reomved the old json file successfully!");
        FileSystem.writeFileSync(jsonpath, json, function(err)
          {
            if (err) {
              console.log(err);
            }
          }
        );
      });

      FileSystem.writeFileSync(jsonpath, json, function(err)
      {
        if (err) {
          console.log(err);
        }
      }
    );
});


