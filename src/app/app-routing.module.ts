import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './search/pages/home/home.component';
import { FilterAuthorComponent } from './search/pages/filter-author/filter-author.component';
import { FilterClassComponent } from './search/pages/filter-class/filter-class.component';
import { FilterOntComponent } from './search/pages/filter-ont/filter-ont.component';
import { DetailsComponent } from './search/pages/details/details.component';
import { FinderComponent } from './search/pages/finder/finder.component';
import { FilterWordComponent } from './search/pages/filter-word/filter-word.component';
import { FilterYearComponent } from './search/pages/filter-year/filter-year.component';
import { FilterCitesComponent } from './search/pages/filter-cites/filter-cites.component';
import { FilterCountryComponent } from './search/pages/filter-country/filter-country.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path: 'search',
    component: FinderComponent,
    children:[
      {
        path:'author',
        component:FilterAuthorComponent,
      },
      {
        path:'class',
        component: FilterClassComponent,
      },
      {
        path: 'ont',
        component: FilterOntComponent,
      },
      {
        path: 'word',
        component: FilterWordComponent,
      },
      {
        path: 'year',
        component: FilterYearComponent
      },
      {
        path:'cites',
        component: FilterCitesComponent
      },
      {
        path: 'country',
        component: FilterCountryComponent
      }
    ]
  },
  {
    path:'term/:id',
    component:DetailsComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
