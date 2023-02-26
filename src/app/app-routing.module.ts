import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SortItComponent} from "./sort-it/sort-it.component";
import {MultipleChoiceComponent} from "./multiple-choice/multiple-choice.component";

const routes: Routes = [
  { path: 'sort-it', component: SortItComponent },
  { path: 'multiple-choice', component: MultipleChoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
