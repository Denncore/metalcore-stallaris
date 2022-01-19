import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetalcoreComponent } from 'src/app/metalcore/metalcore.component';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { CHAPTERS, CHAPTERS_PART_TWO } from 'src/app/data';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'part-1', component: MetalcoreComponent, data: {chapters: CHAPTERS}},
  { path: 'part-2', component: MetalcoreComponent, data: {chapters: CHAPTERS_PART_TWO}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
