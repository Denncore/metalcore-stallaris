import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { MetalcoreComponent } from 'src/app/metalcore/metalcore.component';
import { CHAPTERS, CHAPTERS_PART_TWO } from 'src/app/data';

const routes: Routes = [
  { path: '', component: WelcomeComponent, data: {animation: 'Welcome'}},
  { path: 'part-1', component: MetalcoreComponent, data: {chapters: CHAPTERS, animation: 'PartOne'}},
  { path: 'part-2', component: MetalcoreComponent, data: {chapters: CHAPTERS_PART_TWO, animation: 'PartTwo'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
