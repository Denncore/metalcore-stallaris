import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/model';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-metalcore',
  templateUrl: './metalcore.component.html',
  styleUrls: ['./metalcore.component.scss']
})
export class MetalcoreComponent implements OnInit {
  genres$: Observable<Chapter[]>;
  constructor(private route: ActivatedRoute) {
    this.genres$ = route.data.pipe(map(data => data['chapters'] as Chapter[]))
  }

  ngOnInit(): void {
  }

}
