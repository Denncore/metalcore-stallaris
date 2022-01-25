import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { MetalcoreComponent } from 'src/app/metalcore/metalcore.component';
import { ADDITIONAL_CHAPTERS, CHAPTERS, CHAPTERS_PART_TWO } from 'src/app/data';
import { SourcesComponent } from 'src/app/sources/sources.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, data: {animation: 'Welcome'}},
  { path: 'part-1', component: MetalcoreComponent, data: {chapters: CHAPTERS, animation: 'PartOne'}},
  { path: 'part-2', component: MetalcoreComponent, data: {chapters: CHAPTERS_PART_TWO, additionalChapters: ADDITIONAL_CHAPTERS, animation: 'PartTwo'}},
  { path: 'part-3', component: MetalcoreComponent, data: {chapters: ADDITIONAL_CHAPTERS, animation: 'PartThree'}},
  { path: 'sources', component: SourcesComponent, data: {animation: 'Sources'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
