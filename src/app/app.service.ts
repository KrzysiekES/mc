import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
        return this.http.get('../assets/data.json');
    }
}