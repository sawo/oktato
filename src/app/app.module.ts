import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressBar, MatProgressBarModule} from "@angular/material/progress-bar";
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { SortItComponent } from './sort-it/sort-it.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    MultipleChoiceComponent,
    SortItComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
