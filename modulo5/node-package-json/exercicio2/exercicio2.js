//Exercício 2

const operacao = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

switch(operacao){
	case "add":
		console.log(n1 + n2)
		break;
	case "sub":
		console.log(n1 - n2)
		break;
    case "mult":
		console.log(n1 * n2)
		break;
    case "div":
		console.log(n1 / n2)
		break;
        default:
            console.log("Erro");
        break;
        
} 