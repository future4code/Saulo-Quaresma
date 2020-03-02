const fs = require('fs')

const filename: string = "../../textos/"

const handleReadingDir = new Promise((resolve, reject) => {
    fs.readdir(filename, (err: Error, data: Buffer) => {
        if(err){
            reject(err)
            return
        }
        resolve(data.toString())
    })
})

const init = async () => {
   try{
   const conteudoDoArquivo = await handleReadingDir;
   console.log(conteudoDoArquivo)
   } catch(error){
      console.log(error)
   }
}

init();


// import { readFile, readdir, fstat } from "fs";

// const fileDir: string = "./textos";

// const handleReadDir = (error: Error, files: string[]) => {
//    if(error) {
//       console.error(error);
//       return;
//    } else {
//       files.forEach(text => {
//          console.log(text)         
//       })
//    }
// };

// readdir(fileDir, handleReadDir)

// const filename: string = "./textos/1.txt";

// const handleFileRead = (error: Error, data: Buffer) => {
//    if(error) {
//       console.error(error);
//       return;
//    }

//    const fileContent: string = data.toString();
//    console.log("Arquivo lido com sucesso:", fileContent)
// };

// readFile(filename, handleFileRead)