import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { FilterAuthorComponent } from './pages/filter-author/filter-author.component';
import { FilterWordComponent } from './pages/filter-word/filter-word.component';
import { FilterOntComponent } from './pages/filter-ont/filter-ont.component';
import { FilterClassComponent } from './pages/filter-class/filter-class.component';
import { DetailsComponent } from './pages/details/details.component';
import { FinderComponent } from './pages/finder/finder.component';
import { TermInputComponent } from './components/term-input/term-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermRespComponent } from './components/term-resp/term-resp.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FilterYearComponent } from './pages/filter-year/filter-year.component';
import { FilterCitesComponent } from './pages/filter-cites/filter-cites.component';
import { FilterCountryComponent } from './pages/filter-country/filter-country.component';



@NgModule({
  declarations: [
    HomeComponent,
    FilterAuthorComponent,
    FilterWordComponent,
    FilterOntComponent,
    FilterClassComponent,
    DetailsComponent,
    FinderComponent,
    TermInputComponent,
    TermRespComponent,
    FilterYearComponent,
    FilterCitesComponent,
    FilterCountryComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    FilterAuthorComponent,
    FilterWordComponent,
    FilterOntComponent,
    FilterClassComponent,
    DetailsComponent,
    FilterYearComponent,
    FilterCitesComponent,
    FilterCountryComponent,
  ]

})
export class SearchModule { }
