import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { data } from 'src/assets/data';
import { Word } from '../../interfaces/words.interface';
import { TermService } from '../../services/term.service';

@Component({
  selector: 'app-filter-ont',
  templateUrl: './filter-ont.component.html',
  styleUrls: ['./filter-ont.component.css']
})
export class FilterOntComponent implements OnInit {

  term: string = '';
  tError: boolean = false;
  info: Word[]= [];
  arr;
  toppings = new FormControl();
  selectedOnt;
  form: FormGroup;
  arreglo;
  relevancia;
  onts = [
    'MESH',
    'IOBC',
    'NCIT',
    'BAO',
    'COVID19',
    'The COVID-19 Infectious Disease Ontology',
    'MEDDRA',
    'COVID CRFRAPID',
    'EFO',
    'SNOMEDCT',
    'CODO',
    'Vacccine Ontology (VO)',
    'Health Level Seven Reference Implementation Model, Version 3',
    'VO',
  ];

  constructor(private ts: TermService, private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      ont: ['']
    })
   }

  

  ngOnInit(): void {
    
  }

  buscar(term){
    this.arr = term.value.ont;
    console.log(term.value);
    this.info=data;
    this.arr = this.info.filter(i=> i.onts.toString().includes(term.value.ont));
    
  }
  sugerencias(term:string){
    this.tError=false;
  }

}
