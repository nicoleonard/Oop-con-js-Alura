
export class Autenticacion {
    static login(usuario, clave){
        return usuario.autenticable(clave);
    }
}