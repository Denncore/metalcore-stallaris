import { Component, OnInit } from '@angular/core';
import { WELCOME } from 'src/app/data';
import { Chapter } from 'src/app/model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  start: Chapter[] = WELCOME;
  constructor() { }

  ngOnInit(): void {
  }

}
