import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/model';
import { CHAPTERS } from 'src/app/data';

@Component({
  selector: 'app-metalcore',
  templateUrl: './metalcore.component.html',
  styleUrls: ['./metalcore.component.scss']
})
export class MetalcoreComponent implements OnInit {
  genres: Chapter[] = CHAPTERS;
  constructor() { }

  ngOnInit(): void {
  }

}
