const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

function deleteExistingOutputFile() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
}


function processData() {
  const data = fs.readFileSync(inputFile, "utf-8");
  const lines = data.split(/\n/);


  const newObject = {}

  for (const line of lines) { 
    let elements = line.split(delimiter); 
    const passwordLength = elements[1].length 
 
    if (newObject[`${passwordLength} chars long`]) {
      newObject[`${passwordLength} chars long`] += 1
    } else {
      newObject[`${passwordLength} chars long`] = 1
    }
  }

  console.log(newObject)
}




// Main execution
// deleteExistingOutputFile(); 
processData();