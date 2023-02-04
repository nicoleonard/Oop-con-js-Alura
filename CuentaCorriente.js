import { Cliente } from "./Cliente.js";

export
class CuentaCorriente{
    #cliente;
    #numero;
    #saldo;
    #agencia;
    static cantidadCuentas = 0;

    set setCliente(valor){
        if(valor instanceof Cliente){
            this.#cliente = valor;
        }
    }
    set setNumero(valor){
            this.#numero = valor;
    }
    set setSaldo(valor){
            this.#saldo = valor;
    }
    set setAgencia(valor){
            this.#agencia = valor;
    }

    get getCliente(){
        return this.#cliente;
    }
    get getNumero(){
        return this.#numero;
    }
    get getSaldo(){
        return this.#saldo;
    }
    get getAgencia(){
        return this.#agencia;
    }



    constructor(cliente,numero,agencia){
        this.setCliente = cliente;
        this.setSaldo = 0;
        this.setNumero = numero;
        this.setAgencia = agencia;
        CuentaCorriente.cantidadCuentas++;

    }

    depositoEnCuenta(valor){
        if(valor > 0){
            this.setSaldo = this.getSaldo + valor;
            return this.getSaldo;
        }

    }
    retirarDeCuenta(valor){
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