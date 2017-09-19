import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from '../domain/car';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GotDataService {

  constructor(private http: Http) {}

  getGotCharacters() {
    return this.http.get('assets/showcase/data/got-data-1.json')
      .toPromise()
      .then(res => <Car[]> res.json().data)
      .then(data => { return data; });
  }

}
