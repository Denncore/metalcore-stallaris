import { Component, OnInit } from '@angular/core';
import { Chapter, Planet } from 'src/app/model';
import { NavigationBehaviorOptions, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'metalcore-stellaris';

}
