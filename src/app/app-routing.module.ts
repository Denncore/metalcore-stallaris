import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StellarisComponent } from 'src/app/stellaris/stellaris.component';
import { ChapterOneComponent } from 'src/app/deathcore/chapter-one.component';
import { MetalcoreComponent } from 'src/app/metalcore/metalcore.component';

const routes: Routes = [
  { path: '', component: MetalcoreComponent},
  { path: 'stellaris', component: StellarisComponent},
  { path: 'chapter-1', component: ChapterOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
