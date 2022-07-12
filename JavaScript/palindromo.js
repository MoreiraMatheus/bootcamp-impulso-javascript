function palindromo(string){
    if(!string){
        return 'string inválida'
    }
    const STRING_COLADA = string.replace(' ', '')
    const STRING_SPLIT = STRING_COLADA.split('')
    const STRING_REVERSE = STRING_SPLIT.reverse()
    const STRING_JOIN = STRING_REVERSE.join('')
    return STRING_JOIN === string ? 'Sua string é um palindromo' : 'Sua string não é um palindromo'
}

console.log(palindromo('ovo'))