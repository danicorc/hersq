import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Payload} from './payload';

@Injectable()
export class MedicalConceptService {

  private medConceptUrl = 'LA_URL_VA_AQUI';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  create(medicalConcept: Payload): Promise<Payload> {
    const url = `${this.medConceptUrl}`;
    return this.http
      .post(url, JSON.stringify(medicalConcept), {headers: this.headers})
      .toPromise()
      .then((response) => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
