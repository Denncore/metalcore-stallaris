import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StellarisComponent } from 'src/app/stellaris/stellaris.component';
import { MetalcoreComponent } from 'src/app/metalcore/metalcore.component';
import { ChapterDetailComponent } from 'src/app/chapter-detail/chapter-detail.component';

const routes: Routes = [
  { path: '', component: MetalcoreComponent},
  { path: 'stellaris', component: StellarisComponent},
  { path: 'chapter-1', component: ChapterDetailComponent, data: {chapter: 'chapter-1'}},
  { path: 'chapter-2', component: ChapterDetailComponent, data: {chapter: 'chapter-3'}},
  { path: 'chapter-3', component: ChapterDetailComponent, data: {chapter: 'chapter-3'}},
  { path: 'chapter-4', component: ChapterDetailComponent, data: {chapter: 'chapter-4'}},
  { path: 'chapter-5', component: ChapterDetailComponent, data: {chapter: 'chapter-5'}},
  { path: 'chapter-6', component: ChapterDetailComponent, data: {chapter: 'chapter-6'}},
  { path: 'chapter-7', component: ChapterDetailComponent, data: {chapter: 'chapter-7'}},
  { path: 'chapter-8', component: ChapterDetailComponent, data: {chapter: 'chapter-8'}},
  { path: 'chapter-9', component: ChapterDetailComponent, data: {chapter: 'chapter-9'}},
  { path: 'chapter-10', component: ChapterDetailComponent, data: {chapter: 'chapter-10'}},
  { path: 'chapter-11', component: ChapterDetailComponent, data: {chapter: 'chapter-11'}},
  { path: 'chapter-12', component: ChapterDetailComponent, data: {chapter: 'chapter-12'}},
  { path: 'chapter-13', component: ChapterDetailComponent, data: {chapter: 'chapter-13'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
