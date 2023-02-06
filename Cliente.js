export class Cliente{
    #nombreCliente;
    #dniCliente;
    #rutCliente;
    #clave;


    set setNombreCliente(valor){
        this.#nombreCliente=valor;
    }
    set setDniCliente(valor){
        this.#dniCliente=valor;
    }
    set setRutCliente(valor){
        this.#rutCliente=valor;
    }
    set setClave(valor){
        this.#clave = valor;
    }

    get getNombreCliente(){
        return this.#nombreCliente;
    } 
    get getDniCliente(){
        return this.#dniCliente;
    }
    get getRutCliente(){
        return this.#rutCliente;
    }


    constructor(nombreCliente, dniCliente, rutCliente){
        this.setNombreCliente = nombreCliente;
        this.setRutCliente = rutCliente;
        this.setDniCliente = dniCliente;
        this.setClave = "";
    }

    asignarClave(valor){
        this.setClave = valor;
    }

    autenticable(valor){ 
        return this.#clave == valor;
    }

}