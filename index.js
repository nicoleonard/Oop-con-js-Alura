import{CuentaCorriente} from  './Cuentas/CuentaCorriente.js'
import{Cliente} from  './Cliente.js'
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { Cuenta } from './Cuentas/Cuenta.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { Autenticacion } from './Autenticacion.js';

const cliente1 = new Cliente("Leonard","32421412","41213123");
const cuentaDeLeonard = new CuentaAhorro(cliente1,"1","001",0);
const cliente2 = new Cliente("Elizondo","32581688","095191984");
const cuentaDeElizondo = new CuentaCorriente(cliente2,"2","002");


//codigo para probar el funcionamiento de las cuentas.
/*
cuentaDeLeonard.depositoEnCuenta(1000);
console.log(cuentaDeLeonard.verSaldo());
cuentaDeElizondo.depositoEnCuenta(2000);
console.log(cuentaDeElizondo.verSaldo());

cuentaDeElizondo.transferirParaCuenta(500,cuentaDeLeonard);
console.log(cuentaDeLeonard.verSaldo());
console.log(cuentaDeElizondo.verSaldo());
console.log(CuentaCorriente.cantidadCuentas);

const cuentaNominaLeonard = new cuentaNomina(cliente1, "1","010", 1000);
console.log(cuentaNominaLeonard.verSaldo());
cuentaNominaLeonard.depositoEnCuenta(1500);
console.log(cuentaNominaLeonard.verSaldo());
cuentaNominaLeonard.retirarDeCuenta(500);
console.log(cuentaNominaLeonard.verSaldo());


const cuentaSimple = new Cuenta(cliente1, 3, 321, 1000);*/

const empleado = new Empleado("chichi peralta", "31312654", 10000);
const gerente = new Gerente("cucho pandoroncio", "32654987", 14000);
const director = new Director("chicho pizzas","45123789", 20000);

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());

cliente1.asignarClave("12345");
console.log(Autenticacion.login(cliente1, '12345'));


