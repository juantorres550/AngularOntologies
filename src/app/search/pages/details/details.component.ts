import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TermService } from '../../services/term.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  article;
  show = false;
  autores: any[] = [];
  last: any[] = [];
  constructor(
    private aR: ActivatedRoute,
    private ts: TermService,
    ) { }

  async ngOnInit() {
    await this.aR.params.subscribe( ({id}) =>{
      this.ts.getArticleById(id).then((res: any) =>{
        this.article=res;
        const authors = res.metadata.authors;
        authors.forEach(element => {
          const name = element.first + ' ' + element.last;
          this.autores.push(name);
        });
        setTimeout(() => {
          this.show=true;
        }, 2000);
      }).catch((err)=>{
        console.log(err);
      });
    })
  }
}
