import { Component, Input, OnInit } from '@angular/core';
import { Word } from '../../interfaces/words.interface';

@Component({
  selector: 'app-term-resp',
  templateUrl: './term-resp.component.html',
  styleUrls: ['./term-resp.component.css']
})
export class TermRespComponent implements OnInit {

  @Input() words: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
