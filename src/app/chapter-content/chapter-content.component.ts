import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { State } from 'src/app/store';
import { Store } from '@ngrx/store';
import { descriptionSelector, showDescriptionSelector } from 'src/app/store/selector';
import { Observable, Subscription } from 'rxjs';
import { Description } from 'src/app/model';
import * as DataActions from 'src/app/store/actions';

@Component({
  selector: 'app-chapter-content',
  templateUrl: './chapter-content.component.html',
  styleUrls: ['./chapter-content.component.scss']
})
export class ChapterContentComponent implements OnDestroy, AfterViewInit {
  description$: Observable<Description> | null = null;
  showDescription$: Observable<boolean>;
  scrollable: boolean = false;
  showExpand: boolean = false;

  private sub: Subscription | null = null;

  @Output() resetEmitter: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('chapterBody', {static: false}) chapterBody: ElementRef | undefined;

  constructor(private store: Store<State>) {
    this.description$ = store.select(descriptionSelector) as Observable<Description>;
    this.showDescription$ = store.select(showDescriptionSelector) as Observable<boolean>;
    this.description$.subscribe(() => {
      setTimeout(() => {
        this.checkIfExpandIsNeeded();
      }, 10)
      this.scrollable = false
    })
  }

  ngAfterViewInit(): void {
    this.checkIfExpandIsNeeded();
  }

  private checkIfExpandIsNeeded() {
    let nativeElement = this.chapterBody?.nativeElement;
    this.showExpand = nativeElement?.scrollHeight > nativeElement?.clientHeight + 5;
  }

  reset(): void {
    this.resetEmitter.emit(true);
  }

  closeHelpText() {
    this.store.dispatch(DataActions.hideDescription());
  }

  makeScrollable() {
    this.scrollable = true;
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  showExpandButton(): boolean {
    if (this.scrollable) {
      return false;
    }
    return this.showExpand;
  }
}
