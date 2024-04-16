import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  batch:any = [];

  constructor(private http: HttpClient) {}

  getAllBatch(): Observable<any> {
    return this.http.get<any>('http://localhost:4500/batch')
  }

  getBatch(id: number): Observable<any> {
    //id = 2;
    /*this.batch = this.http.get<object>('http://localhost:4500/batch/' + id)
            .subscribe(data => {
              console.log("My Data : ", data);
              this.batch = data;
          },
          error => {
          }
        );

        return this.batch;*/
        return this.http.get<Observable<any>>('http://localhost:4500/batch/' + id);
    }


  
}
