import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/store';
import { Store } from '@ngrx/store';
import * as DataActions from 'src/app/store/actions';
import { Description } from 'src/app/model';
import { HELP_DESCRIPTION } from 'src/app/data';

@Component({
  selector: 'app-open-help',
  templateUrl: './open-help.component.html',
  styleUrls: ['./open-help.component.scss']
})
export class OpenHelpComponent {

  constructor(private store: Store<State>) { }

  openHelp() {
    const description: Description = {...HELP_DESCRIPTION}

    this.store.dispatch(DataActions.updateDescription({description}));
  }
}
