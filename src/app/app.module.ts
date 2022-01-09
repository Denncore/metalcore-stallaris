import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StellarisComponent } from './stellaris/stellaris.component';
import { ChapterOneComponent } from 'src/app/deathcore/chapter-one.component';
import { OrbitComponent } from './orbit/orbit.component';
import { MetalcoreComponent } from './metalcore/metalcore.component';

@NgModule({
  declarations: [
    AppComponent,
    StellarisComponent,
    ChapterOneComponent,
    OrbitComponent,
    MetalcoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
