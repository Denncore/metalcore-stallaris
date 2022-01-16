import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StellarisComponent } from './stellaris/stellaris.component';
import { OrbitComponent } from './orbit/orbit.component';
import { MetalcoreComponent } from './metalcore/metalcore.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StellarisComponent,
    OrbitComponent,
    MetalcoreComponent,
    ChapterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
