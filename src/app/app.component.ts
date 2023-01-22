import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public words: any;
  public gameType: string = '';

  public constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    this.httpClient.get<string>('https://gist.githubusercontent.com/sawo/5ee36088c0edf6466d7328793a3fecd1/raw/fc98429a6357d1c4fcc644e1b70c2431bd046cf0/magyar-szavak.txt', {
      headers,
      //@ts-ignore
      responseType: 'text'
    }).subscribe((res: any) => {
      const resAsString = res as string;
      this.words = res.split('\n');
    });
  }
}
