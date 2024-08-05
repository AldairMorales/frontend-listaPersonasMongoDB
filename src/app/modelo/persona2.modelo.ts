export class Persona2Modelo{

    _id?: string;
    public dni?: string;
    public nombres?: string;
    public apellidos?: string;
    public indice: number = -1;

    public limpiar(){
        this._id = '';
        this.dni = '';
        this.nombres = '';
        this.apellidos = '';
    }

}