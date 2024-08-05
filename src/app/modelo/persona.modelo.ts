export class PersonaModelo{

    // public dni: string = '';
    // public nombres: string= '';
    // public apellidos: string='';

    public dni?: string;
    public nombres?: string;
    public apellidos?: string;

    public limpiar(){
        this.dni = '';
        this.nombres = '';
        this.apellidos = '';
    }

    


}