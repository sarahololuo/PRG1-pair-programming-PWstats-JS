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
  // console.log(data)
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
  return newObject;
}

const passwordLengthObject = processData()

function writeObjectToFile (Object) {
  fs.writeFileSync("./passwords_length_object.txt", JSON.stringify(Object).replaceAll(",", ",\n"))
}



// Main execution
// deleteExistingOutputFile(); 
processData();
writeObjectToFile(passwordLengthObject)

