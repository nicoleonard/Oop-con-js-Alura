
class Cliente{
    nombreCliente;
    dniCliente;
    rutCliente;

    constructor(){
        this.dniCliente='';
        this.rutCliente='';
    }

}

class CuentaCorriente{
    numero;
    #saldo;
    agencia;

    constructor(){
        this.#saldo=0;
        this.numero='';
        this.agencia='';
    }

    depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldo =+valor;
            return this.#saldo;
        }

    }
    retirarDeCuenta(valor){
        if(valor <= this.#saldo){
            this.#saldo -= valor;
            return this.#saldo;
        }

    }

    verSaldo(){
        return this.#saldo;
    }
}

const cliente1 = new Cliente();
cliente1.nombreCliente = "Jose";


const cliente2 = new Cliente();
cliente2.nombreCliente = "Pepe";


const cliente3 = new Cliente();
cliente3.nombreCliente = "Fernanda";


console.log(cliente1);
console.log(cliente2);
console.log(cliente3);