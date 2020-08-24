import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Joke } from './joke';

@Injectable()
export class ChuckNorrisService {

  constructor(private http: HttpClient) { }
  jokesUrl = 'https://api.icndb.com/jokes/random';  // URL to web api


  getJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.jokesUrl);
  }
}

