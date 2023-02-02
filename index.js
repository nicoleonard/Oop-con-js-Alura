
class Cliente{
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;
}

const cliente1 = new Cliente();
cliente1.nombreCliente = "Jose";
cliente1.numeroCuenta = "124512512";
cliente1.dniCliente = "123124";
cliente1.saldoCuenta = "500";

const cliente2 = new Cliente();
cliente2.nombreCliente = "Pepe";
cliente2.numeroCuenta = "124512242";
cliente2.dniCliente = "12312244";
cliente2.saldoCuenta = "50000000";

const cliente3 = new Cliente();
cliente3.nombreCliente = "Fernanda";
cliente3.numeroCuenta = "124512522";
cliente3.dniCliente = "12341242";
cliente3.saldoCuenta = "500000000000";

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);