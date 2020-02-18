import { Dessert } from './dessert';
import { SaltyDish } from './saltydish';

console.log("PRATOS SALGADOS")
console.log("-----------------------")

const carbonara = new SaltyDish("carbonara", 50, 10, ["macarrão", "presunto", "queijo"], 30)
console.log(carbonara)
console.log(carbonara.getProfit());

carbonara.cook()
console.log("-----------------------")

const feijoada = new SaltyDish("feijoada", 100, 20, ["feijão", "Linguiça", "carne seca"], 100);
console.log(feijoada)
console.log(feijoada.getProfit());

feijoada.cook()

console.log("-----------------------")
console.log("PRATOS DOCES")
console.log("-----------------------")

const brigadeiro = new Dessert("brigadeiro", 5, 1, ["chocolate", "leite condensado", "chocolate granulado"], 30, 10)
console.log(brigadeiro)
console.log(brigadeiro.getProfit());
console.log(brigadeiro.getSlicePrice());

brigadeiro.cook()
console.log("-----------------------")

const pudim = new Dessert("pudim", 7, 2, ["leite", "leite condensado", "calda de açúcar"], 45, 20)
console.log(pudim)
console.log(pudim.getProfit());
console.log(pudim.getSlicePrice());

pudim.cook()

console.log("-----------------------")
console.log("EMPREGADOS")
console.log("-----------------------")