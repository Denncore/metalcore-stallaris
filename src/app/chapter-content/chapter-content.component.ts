import { Component, EventEmitter, Output } from '@angular/core';
import { State } from 'src/app/store';
import { Store } from '@ngrx/store';
import { descriptionSelector, showDescriptionSelector } from 'src/app/store/selector';
import { Observable } from 'rxjs';
import { Description } from 'src/app/model';
import * as DataActions from 'src/app/store/actions';

@Component({
  selector: 'app-chapter-content',
  templateUrl: './chapter-content.component.html',
  styleUrls: ['./chapter-content.component.scss']
})
export class ChapterContentComponent {
  description$: Observable<Description> | null = null;
  showDescription$: Observable<boolean>;
  @Output() resetEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private store: Store<State>) {
    this.description$ = store.select(descriptionSelector) as Observable<Description>;
    this.showDescription$ = store.select(showDescriptionSelector) as Observable<boolean>;
  }

  reset(): void {
    this.resetEmitter.emit(true);
  }

  closeHelpText() {
    this.store.dispatch(DataActions.hideDescription());
  }

}
