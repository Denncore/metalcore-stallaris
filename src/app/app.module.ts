import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrbitComponent } from './orbit/orbit.component';
import { MetalcoreComponent } from './metalcore/metalcore.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChapterContentComponent } from './chapter-content/chapter-content.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store';
import { FooterComponent } from './footer/footer.component';
import { SourcesComponent } from './sources/sources.component';
// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state-before', state);
    console.log('action', action);

    let stateAfter = reducer(state, action);
    console.log('state-after', stateAfter);
    return stateAfter;
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
@NgModule({
  declarations: [
    AppComponent,
    OrbitComponent,
    MetalcoreComponent,
    WelcomeComponent,
    ChapterContentComponent,
    FooterComponent,
    SourcesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
