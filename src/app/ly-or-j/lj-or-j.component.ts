import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ly-or-j',
  templateUrl: './lj-or-j.component.html',
  styleUrls: ['./lj-or-j.component.css']
})
export class LjOrJComponent {

  public _words: string[] = [];

  @Input()
  set words(words: string[]) {
    for (const word of words) {
      const hasJ = word.indexOf('jj');
      const hasLj = word.indexOf('lj');
      if (hasJ !== -1 || hasLj !== -1) {
        this._words.push(word);
      }
    }
    console.log(this._words);
  }

}
