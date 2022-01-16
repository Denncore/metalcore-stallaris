import { Component, OnInit } from '@angular/core';
import { CHAPTERS } from 'src/app/data';
import { Band } from 'src/app/model';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.scss']
})
export class ChapterDetailComponent implements OnInit {
  chapter: string = '';
  chapterText: string = '';
  title: string = '';
  bands: Band[] = [];

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.data.pipe(take(1)).subscribe(data => {
      this.chapter = data['chapter'] as string;
    })
  }

  ngOnInit(): void {
    this.chapterText = CHAPTERS.filter(chapter => chapter.chapterName?.toLowerCase() === this.chapter)[0].description as string;
    this.title = CHAPTERS.filter(chapter => chapter.chapterName?.toLowerCase() === this.chapter)[0].title as string;
    this.bands = CHAPTERS.filter(chapter => chapter.chapterName?.toLowerCase() === this.chapter)[0].bands as Band[];
  }

}
