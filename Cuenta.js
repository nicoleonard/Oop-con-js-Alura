import { Cliente } from "./Cliente.js";

export class Cuenta{
    #cliente;
    #saldo;
    

    set setCliente(valor){
        if(valor instanceof Cliente){
            this.#cliente = valor;
        }
    }
    set setNumero(valor){
        this.numero = valor;
    }
    set setAgencia(valor){
        this.agencia = valor;
    }
    set setSaldo(valor){
            this.#saldo = valor;
    }
    get getCliente(){
        return this.#cliente;
    }
    get getNumero(){
        return this.numero;
    }
    get getAgencia(){
        return this.agencia;
    }
    get getSaldo(){
        return this.#saldo;
    }



    constructor(cliente, numero, agencia, saldo){
        this.setNumero = numero;
        this.setCliente = cliente;
        this.setAgencia = agencia;
        this.setSaldo = saldo;

    }

    depositoEnCuenta(valor){
        if(valor > 0){
            this.setSaldo = this.getSaldo + valor;
            return this.getSaldo;
        }

    }
    retirarDeCuenta(valor){
        this._retirarDeCuenta(valor,0);
    }
    _retirarDeCuenta(valor, comision){
        valor = valor * (1+comision/100);
        if(valor <= this.getSaldo){
            this.setSaldo = this.getSaldo - valor;
            return this.getSaldo;
        }
    }


    verSaldo(){
        return this.getSaldo;
    }

    transferirParaCuenta(valor, cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}