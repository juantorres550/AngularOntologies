import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  routes = [
    {path: '/search/author', text: 'Autor', icon: 'person'},
    {path: '/search/class', text: 'Clase'},
    {path: '/search/ont', text: 'Ontología'},
    {path: '/search/word', text: 'Término'},
    {path: '/search/year', text: 'Año'},
    {path: '/search/cites', text: 'Citaciones'},
    {path: '/search/country', text: 'País'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
