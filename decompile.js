// Read Synchrously
var fs = require("fs")
console.log("\n *START* \n")

var content = fs.readFileSync("MSys.nxs")
var jsonFirst = JSON.parse(content)

var currentJson = jsonFirst
var currentFolder = './'
var currentName = ''
var makedir = false

loopJson(currentJson)

function loopJson (json) {
  for (let [key, value] of Object.entries(json)) {
    if (key === 'type' && value === 'group'){
      makedir = true
    }

    if(key === 'name' && makedir === true){
      console.log('make folder ' + value)
      fs.mkdirSync(value)
      makedir = false
      currentFolder += value + '/'
    } else if (key === 'name'){
      currentName = value
    }

    if(key === 'code'){
      createCodeFile(value, currentFolder, currentName)
    }

    if (key === 'items') {
      if (value.length > 0) {
        for (i=0; i< value.length; i++){
          loopJson(value[i])
        }
      }
      console.log(currentName + ': ' + value.length)
    }
  }
}

function createCodeFile(code, location, filename){
  fs.writeFile(location + filename+'.js', code, function (err) {
    if (err) throw err;
    console.log('File ' + filename + '.js created.');
  });
}

console.log("\n *EXIT* \n")


