import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleSearchPageComponent } from './article-search-page/article-search-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'search', component: ArticleSearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
