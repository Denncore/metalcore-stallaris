import { Component, Input, OnInit } from '@angular/core';
import { Band } from 'src/app/model';
import { CHAPTERS } from 'src/app/data';

@Component({
  selector: 'app-deathcore',
  templateUrl: './chapter-one.component.html',
  styleUrls: ['./chapter-one.component.scss']
})
export class ChapterOneComponent implements OnInit {
  chapterText: string = CHAPTERS.filter(chapter => chapter.chapterName?.toLowerCase() === 'chapter-1')[0].description as string;
  bands: Band[] = CHAPTERS.filter(chapter => chapter.chapterName?.toLowerCase() === 'chapter-1')[0].bands as Band[];

  constructor() { }

  ngOnInit(): void {
  }

}
