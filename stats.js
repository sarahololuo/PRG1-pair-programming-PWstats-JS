const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

function deleteExistingOutputFile() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
}

// function processData() {
//   const data = fs.readFileSync(inputFile, "utf-8");
//   const lines = data.split(/\n/);

//   for (line of lines) {
//     elements = line.split(delimiter);
//     console.log(elements);
//   }
// }


function processData() {
  const data = fs.readFileSync(inputFile, "utf-8");
  // console.log(data)
  const lines = data.split(/\n/);
  let passwordLengthArray = [];

  const newObject = {
  }

  for (const line of lines) { // loop through each line in lines
    let elements = line.split(delimiter); //split line into an array
    const passwordLength = elements[1].length // access the password in line and return its length
    passwordLengthArray.push(passwordLength) // push the length to password length array

    if (newObject[`${passwordLength} chars long`]) {
      newObject[`${passwordLength} chars long`] += 1
    } else {
      newObject[`${passwordLength} chars long`] = 1
    }
  }

  

  // for (const number in passwordLengthArray) {
  //   console.log(newObjectPropertiesArray)
  //   if (newObjectPropertiesArray.includes(`${number} chars long`)) {
  //     newObject[`${number} chars long`] += 1;
  //   } else {
  //     newObject[`${number} chars long`] = 0;
  //     newObject[`${number} chars long`] += 1;
  //   }
  // }

  console.log(newObject)
}




// Main execution
// deleteExistingOutputFile(); 
processData();