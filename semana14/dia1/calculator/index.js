let calculator = process.argv[2]

if(process.argv.length <= 4){
   console.log('\x1b[33m', "Esperava 5 parâmetros, recebi menos que isso.", '\x1b[0m')
} else {
   switch (calculator) {
      case "add":
         const valorTotalAdd = Number(process.argv[3]) + Number(process.argv[4]);
         console.log('\x1b[34m', "Resposta:", valorTotalAdd, '\x1b[0m')
         break;
      case "sub":
         const valorTotalSub = Number(process.argv[3]) - Number(process.argv[4]);
         console.log('\x1b[35m', "Resposta:", valorTotalSub, '\x1b[0m')
         break;
      case "mult":
         const valorTotalMult = Number(process.argv[3]) * Number(process.argv[4]);
         console.log('\x1b[33m', "Resposta:", valorTotalMult, '\x1b[0m')
         break;
      case "div": 
         const valorTotalDiv = Number(process.argv[3]) / Number(process.argv[4]);
         console.log('\x1b[32m', "Resposta:", valorTotalDiv, '\x1b[0m')
         break;
      default: 
         console.log('\x1b[31m', "Erro, faltou algum argumento!", '\x1b[0m');
   };
}