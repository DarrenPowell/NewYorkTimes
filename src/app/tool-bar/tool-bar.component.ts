import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SET_MENU_STATE } from '../reducers/menu-reducer';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  menuOpen: boolean;

  constructor(
    private store: Store<any>
  ) {
    store.pipe(select('menuState'))
      .subscribe(menuOpen => {
        this.menuOpen = menuOpen;
      })
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.store.dispatch({ type: SET_MENU_STATE, payload: !this.menuOpen });
  }

}
