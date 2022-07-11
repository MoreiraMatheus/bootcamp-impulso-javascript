//criar função que recebe 2 numeros como parâmetro
//conferir se os numeros são iguais

//conferir se a soma dos numeros é maior que 10 ou menor que 20
//retornar uma string dizendo: 'os numeros num1 e num2 são/não são iguais, sua soma é soma, que é maior/menor que 10 e maior/menor que 20'

function analisador(num1, num2){
    let igual = ''
    let soma = num1 + num2
    let mais_10 = ''
    let mais_20 = ''
    num1 == num2 ? igual = 'são' : igual = 'não são'
    soma > 10 ? mais_10 = 'maior' : mais_10 = 'menor'

    soma > 20 ? mais_20 = 'maior' : mais_20 = 'menor'

    const mensagem = `Os numeros ${num1} e ${num2} ${igual} iguais, sua soma é ${soma}, que é ${mais_10} que 10 e ${mais_20} que 20`
    return mensagem
}

console.log(analisador(10, 10))