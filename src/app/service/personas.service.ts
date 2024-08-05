import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Persona2Modelo } from "../modelo/persona2.modelo";


@Injectable(
    { providedIn: 'root'}
)
export class PersonasService{

    private apiUrl = 'http://localhost:5000/api/persons';
    
    constructor(private http: HttpClient) { }

    getPersons(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    getPerson(id: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    
    createPerson(person: any): Observable<any> {
        return this.http.post(this.apiUrl, person);
    }
    
    updatePerson(id: string, person: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}`, person);
    }
    
    deletePerson(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }


}