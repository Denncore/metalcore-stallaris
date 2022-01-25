import { Component, OnInit } from '@angular/core';
import { Chapter, Description } from 'src/app/model';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subject, take } from 'rxjs';
import { State } from 'src/app/store';
import { Store } from '@ngrx/store';
import * as DataActions from 'src/app/store/actions';
import { HELP_DESCRIPTION, METALCORE_DESCRIPTION, METALCORE_DESCRIPTION_2 } from 'src/app/data';

@Component({
  selector: 'app-metalcore',
  templateUrl: './metalcore.component.html',
  styleUrls: ['./metalcore.component.scss']
})
export class MetalcoreComponent implements OnInit {
  chapters: Chapter[] | undefined;
  part: string | undefined;

  private reset: Subject<any> = new Subject();

  get reset$() {
    return this.reset.asObservable();
  }

  constructor(private route: ActivatedRoute, private store: Store<State>) {
    route.data.pipe(take(1))
      .subscribe(data => {
        this.chapters = data['chapters'] as Chapter[]
        this.part = data['animation'] as string

        if (this.part.indexOf('PartOne') > -1) {
          this.store.dispatch(DataActions.updateDescription({ description: {...HELP_DESCRIPTION} }))
        } else if (this.part.indexOf('PartTwo') > -1){
          this.store.dispatch(DataActions.updateDescription({ description: {...METALCORE_DESCRIPTION_2} }))
        } else {
          this.store.dispatch(DataActions.hideDescription())
        }
      });
  }

  ngOnInit(): void {
  }

  resetNext(): void {
    this.reset.next(true);
  }
}
