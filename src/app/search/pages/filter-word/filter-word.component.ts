import { Component, OnInit } from '@angular/core';
import { TermService } from '../../services/term.service';
import { Word } from '../../interfaces/words.interface';
import { info } from '../../../../assets/info';
import { Term, Info } from '../../interfaces/info.interface';

@Component({
  selector: 'app-filter-word',
  templateUrl: './filter-word.component.html',
  styleUrls: ['./filter-word.component.css']
})
export class FilterWordComponent implements OnInit {

  term: string = '';
  tError: boolean = false;
  infor: any[]= [];
  termsArray: Info[] = [];
  constructor(private ts: TermService) { }

  ngOnInit(): void {
    console.log(info);
  }

  buscar(term :string){
    this.term=term;
    this.infor = info;
    term = term.toLowerCase().trim();
    if(term==''){
      this.tError=true;
      this.infor = [];
      setTimeout(() => {
        this.tError=false;
      }, 2000);
    }
    this.infor.forEach(element => {
      const el1 = element.terms.filter( i => i.term.toLowerCase().toString().trim().startsWith(term))
      if(el1.length){
        el1.forEach(el2 => {
          this.termsArray.push(el2);
        });
      }else{
        this.termsArray = [];
      }
      console.log(this.termsArray)
    })
    if(this.termsArray.length == 0){
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
