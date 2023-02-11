import { Component, OnInit } from '@angular/core';
import { Word } from '../../interfaces/words.interface';
import { TermService } from '../../services/term.service';
import { data } from '../../../../assets/data';

@Component({
  selector: 'app-filter-class',
  templateUrl: './filter-class.component.html',
  styleUrls: ['./filter-class.component.css']
})
export class FilterClassComponent implements OnInit {

  term: string = '';
  tError: boolean = false;
  info: Word[]= [];
  arr;

  constructor(private ts: TermService) { }

  ngOnInit(): void {
  }

  buscar(term :string){
    this.term=term;
    // this.tError=false;
    this.info = data;
    term = term.toLowerCase();
    if(term==''){
      this.tError=true;
      this.info = [];
      setTimeout(() => {
        this.tError=false;
      }, 2000);
    }
    this.arr = this.info.filter(i=> i.keyword.toLowerCase().includes(term));
    if(this.arr.length == 0){
      this.tError=true;
      setTimeout(() => {
        this.tError=false;
      }, 2000);
    }
  }
  sugerencias(term:string){
    this.tError=false;
  }

}
