import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class PeticionesService{
    public url:string;

    constructor(
        private _http:HttpClient
    ){

        this.url="http://jsonplaceholder.typicode.com/posts"

    }

    getPreueba(){
        return 'Hola, soy un servicio!';
    }

    getPost():Observable<any>{
        return this._http.get(this.url);
    }
}