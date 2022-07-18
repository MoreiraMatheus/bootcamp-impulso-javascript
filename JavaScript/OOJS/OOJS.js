class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = saldo
    }

    get _saldo(){
        return this._saldo
    }

    set _saldo(valor){
        this._saldo = valor
    }

    sacar(valor) {
        this._saldo < valor ? 'operação negada' : this._saldo -= valor
        console.log('saldo atual' + this._saldo)
    }

    depositar(valor){
        this._saldo += valor
        console.log('saldo atual' + this._saldo)
    }
}

const conta = new ContaBancaria('bradesco', 1234, 'corrente', 3000)