import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { State } from 'src/app/store';
import { Store } from '@ngrx/store';
import { descriptionSelector, showDescriptionSelector } from 'src/app/store/selector';
import { Observable } from 'rxjs';
import { Description } from 'src/app/model';
import * as DataActions from 'src/app/store/actions';
import { METALCORE_DESCRIPTION, METALCORE_DESCRIPTION_2 } from 'src/app/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-content',
  templateUrl: './chapter-content.component.html',
  styleUrls: ['./chapter-content.component.scss']
})
export class ChapterContentComponent {
  description$: Observable<Description>;
  showDescription$: Observable<boolean>;
  @Input() part: string | undefined;

  @Output() resetEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private store: Store<State>, private router: Router) {
    this.description$ = store.select(descriptionSelector) as Observable<Description>;
    this.showDescription$ = store.select(showDescriptionSelector) as Observable<boolean>;
  }

  reset(): void {
    this.resetEmitter.emit(true);
  }

  closeHelpText() {
    let description: Description | null = null;
    if (this.router.url.indexOf('part-1') > -1) {
      description = {...METALCORE_DESCRIPTION}
    } else {
      description = {...METALCORE_DESCRIPTION_2}
    }
    this.store.dispatch(DataActions.updateDescription({description}))
  }

}
