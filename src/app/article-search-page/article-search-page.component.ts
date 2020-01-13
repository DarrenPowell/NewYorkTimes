import { Component, OnInit } from '@angular/core';
import { SearchData } from '../search-data';
import { NgForm } from '@angular/forms';
import { NytService } from '../nyt.service';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { SET_SEARCH_RESULT } from '../reducers/search-results-reducer';

@Component({
  selector: 'app-article-search-page',
  templateUrl: './article-search-page.component.html',
  styleUrls: ['./article-search-page.component.scss']
})
export class ArticleSearchPageComponent implements OnInit {
  searchData: SearchData = <SearchData>{
    sort: 'newest'
  };
  today: Date = new Date();

  constructor(
    private nytService: NytService,
    private store: Store<any>
  ) {

  }

  ngOnInit() {
  }

  search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    const data: any = {
      begin_date: moment(this.searchData.begin_date).format('YYYYMMDD'),
      end_date: moment(this.searchData.end_date).format('YYYYMMDD'),
      q: this.searchData.q
    }
    this.nytService.search(data)
      .subscribe(res => {
        this.store.dispatch({ type: SET_SEARCH_RESULT, payload: (res as any).response.docs });
      })
  }

}
