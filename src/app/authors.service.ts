import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

export class AuthorsService {
   getAuthors(): string[] {
      return ["Neil Amstrong", "S. Primak", "Poodle"];
   } 
}

// export interface Bear {
//    id: string;
//    name: string;
//  }

@Injectable()
export class BearsService {
   constructor(private http: HttpClient) { }

   get_bears_url = 'api/bears'

   private handleError(error: HttpErrorResponse) {
      console.log('Error occurred during bears GET');
      console.log(error);
      return throwError(
         'Something bad happened; please try again later.');
   }

   getBears()/*: Observable<Bear>*/ {
      // let resp = this.http.get<Bear>(this.base_url + this.get_bears_url);
      let resp = this.http.get(this.get_bears_url)
      .pipe(
         catchError(this.handleError)
       );
      // console.log(resp);
      return resp;
   }

   createBear(name) {
      console.log("Sending create request. name=" + name);

      let data = { 'name': name };

      return this.http.post(this.get_bears_url, data, httpOptions)
      .pipe(
         catchError(this.handleError)
      );
   }
}