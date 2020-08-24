import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChuckNorrisService } from './chuck-norris.service';
import { Joke } from './joke';
import { Observable, Subscription } from 'rxjs';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
  providers: [ChuckNorrisService],
})
export class JokesComponent implements OnInit, OnDestroy {
  // static: Observable<Joke>;
  static: string;
  subsc: Subscription;

  constructor(private chuckNorrisService: ChuckNorrisService) { }

  ngOnInit() {
    this.next();
  }

  next(): void {
    this.subsc = this.chuckNorrisService.getJoke()
      .subscribe(joke => this.static = joke.value.joke);
  }

  ngOnDestroy() {
    this.subsc.unsubscribe();
  }

}
