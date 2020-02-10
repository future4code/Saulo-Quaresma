const fs = require("fs");
const data = "\n" + process.argv[3]
const filename = "tarefas.txt";

if (process.argv.length <= 2) {
   console.log('\x1b[33m', "Esperava 3 parâmetros, recebi menos que isso.", '\x1b[0m')
} else {
   try {
      fs.appendFileSync(filename, data, "utf8");
      console.log('\x1b[32m', "Dado inserido com sucesso!", '\x1b[0m')
   } catch (error) {
      console.log('\x1b[31m', error, '\x1b[0m')
   }
}