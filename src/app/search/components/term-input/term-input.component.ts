import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators'
import { data } from '../../../../assets/data';


@Component({
  selector: 'app-term-input',
  templateUrl: './term-input.component.html',
  styleUrls: ['./term-input.component.css']
})
export class TermInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string;
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();
  word: string = '';
  selected;
  data;

  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor=>{
        this.onDebounce.emit( valor );
      })
  }
  teclaPresionada(){
    this.debouncer.next(this.word);
  }

  buscar(){
    this.onEnter.emit(this.word);
  }
  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.selected = undefined;
      return;
    }
    const term = event.option.value;
    this.word = term.author;

    //Peticion al servicio para obtener la data
  }

}
