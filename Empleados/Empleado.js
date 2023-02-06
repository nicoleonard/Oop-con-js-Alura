export class Empleado{
    #nombre;
    #dni;
    #salario;
    #clave;


    set setNombre(valor){
        this.#nombre = valor;
    }
    set setDni(valor){
        this.#dni = valor;
    }
    set setSalario(valor){
        this.#salario = valor;
    }
    set setClave(valor){
        this.#clave = valor;
    }


    get getNombre(){
        return this.#nombre;
    }
    get getDni(){
        return this.#dni;
    }
    get getSalario(){
        return this.#salario;
    }


    constructor(nombre, dni, salario){
        this.setNombre = nombre;
        this.setDni = dni;
        this.setSalario = salario;
        this.setClave = "";
    }

    asignarClave(valor){
        this.setClave = valor;
    }

    autenticable(valor){ //no uso un getter para el atributo clave xq no quiero q se pueda acceder a su valor, y para verificar la clave hago un metodo q acceda y devueva true o false si la clave coincide
        return this.#clave == valor;
    }

    verBonificacion(){
        return this.getSalario;
    }

    _verBonificacion(bono){
        return this.getSalario + this.getSalario * bono / 100;
    }




}