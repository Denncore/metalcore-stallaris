import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/model';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-metalcore',
  templateUrl: './metalcore.component.html',
  styleUrls: ['./metalcore.component.scss']
})
export class MetalcoreComponent implements OnInit {
  chapters: Chapter[] | undefined;
  part: string | undefined;
  constructor(private route: ActivatedRoute) {
    route.data.pipe(take(1))
      .subscribe(data => {
        this.chapters = data['chapters'] as Chapter[]
        this.part = data['animation'] as string
      });
  }

  ngOnInit(): void {
  }

}
