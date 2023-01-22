import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-sort-it',
  templateUrl: './sort-it.component.html',
  styleUrls: ['./sort-it.component.css']
})
export class SortItComponent {

  @Input()
  public numberOfChallenges: number | undefined;

  @Input()
  set words(words: string[]) {
    this._words = words;
    this.generateChallenge(5);
  }

  private _words: string[] = [];

  public gameType: string = 'multiple-choice';
  public challenge: string[] = [];
  public challengeOrdered: string[] = [];
  public result: string = '';
  public totalGuesses = 0;
  public correctGuesses = 0;
  public voted: boolean = false;
  private timeout: any;

  private randomIntFromInterval(min: number, max: number): number { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  guess(word: string): void {
    if (!this.voted) {
      const correct: boolean = this.challengeOrdered[0] === word;
      if (correct) {
        this.result = 'helyes';
        this.correctGuesses++;
        this.timeout = setTimeout(() => {
          this.restart();
        }, 1000);
      } else {
        this.result = 'helytelen';
      }
      this.totalGuesses++;
      this.voted = true;
    }
  }

  private generateChallenge(noOfWords: number) {
    this.challenge = [];
    this.challengeOrdered = [];

    for (let i = 0; i < noOfWords; i++) {
      const randomWord = this.getRandomWord();
      this.challenge.push(randomWord);
      this.challengeOrdered.push(randomWord)
    }
    this.challengeOrdered.sort((a, b) => a.localeCompare(b, 'hu-HU'));
  }

  private getRandomWord(): string {
    let valid = false;
    let randomWord: string = '';
    do {
      const rand = this.randomIntFromInterval(0, this._words.length - 1);
      randomWord = this._words[rand];
      const noSpecialCharactersFound: boolean =
        randomWord.indexOf('-') === -1 &&
        randomWord.indexOf('&') === -1 &&
        randomWord.indexOf('*') === -1;
      valid = noSpecialCharactersFound;
    } while (!valid);

    return randomWord;
  }

  public restart() {
    if (this.timeout != null) {
      clearTimeout(this.timeout);
    }
    this.result = '';
    this.voted = false;
    this.generateChallenge(5);
  }

  public showPercent(actual: number, total: number) {
    return total && total > 0 ? actual / total * 100 : 0;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.challenge, event.previousIndex, event.currentIndex);
  }

  validateOrder() {
    let correct: boolean = true;
    for (let i = 0; i < this.challenge.length; i++) {
      if (this.challenge[i] !== this.challengeOrdered[i]) {
        correct = false;
        break;
      }
    }
    if (correct) {
      this.result = 'helyes';
      this.correctGuesses++;
      this.timeout = setTimeout(() => {
        this.restart();
      }, 1000);
    } else {
      this.result = 'helytelen';
    }
    this.totalGuesses++;
    this.voted = true;
  }
}

