import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { Joke } from './joke';
import { async } from '@angular/core/testing';

@Injectable()
export class ChuckNorrisService {

  constructor(private http: HttpClient) { }
  jokesUrl = 'http://api.icndb.com/jokes/random';  // URL to web api


  getJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.jokesUrl);
  }
}

