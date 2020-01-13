import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-article-search-results',
  templateUrl: './article-search-results.component.html',
  styleUrls: ['./article-search-results.component.scss']
})
export class ArticleSearchResultsComponent implements OnInit {
  searchResults: any[] = [];

  constructor(
    private store: Store<any>
  ) {
    store.pipe(select('searchResults'))
      .subscribe(searchResults => {
        this.searchResults = searchResults;
      })
  }

  ngOnInit() {
  }

}
