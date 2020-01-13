import { Component, OnInit } from '@angular/core';
import { NytService } from '../nyt.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  sections: string[] =
    `arts, automobiles, books, business, fashion, food, health,
    home, insider, magazine, movies, national, nyregion, obituaries,
    opinion, politics, realestate, science, sports, sundayreview,
    technology, theater, tmagazine, travel, upshot, world`
      .replace(/ /g, '')
      .split(',');
  results: any[] = [];
  selectedSection: string = 'home';

  constructor(
    private nytService: NytService
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.nytService.getArticles(this.selectedSection)
      .subscribe(res => {
        this.results = (res as any).results;
      })
  }
}
