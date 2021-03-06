import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';
@Injectable()
export class ApiServices {
  constructor(private http: HttpClient) {
  }
  submitRequest(token: string, req: any) {
    const t = 'bearer ' + token;
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': t
      })
    };
    return this.http.post<any>('Your API', req, options)
      .map((value: any) => {
        return value;
      });
  }
}
