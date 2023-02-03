import{CuentaCorriente} from  './CuentaCorriente.js'
import{Cliente} from  './Cliente.js'
 
const cliente1 = new Cliente("Leonard","32421412","41213123");

const cuentaDeLeonard = new CuentaCorriente(cliente1,"1","001");
console.log(cuentaDeLeonard.getSaldo);

const cliente2 = new Cliente("Elizondo","32581688","095191984");

const cuentaDeElizondo = new CuentaCorriente(cliente2,"2","002");


cuentaDeLeonard.depositoEnCuenta(1000);
console.log(cuentaDeLeonard.verSaldo());
cuentaDeElizondo.depositoEnCuenta(2000);
console.log(cuentaDeElizondo.verSaldo());

cuentaDeElizondo.transferirParaCuenta(500,cuentaDeLeonard);
console.log(cuentaDeLeonard.verSaldo());
console.log(cuentaDeElizondo.verSaldo());

