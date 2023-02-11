import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { data } from 'src/assets/data';
import { Article } from '../interfaces/article.interface';
import { Word } from '../interfaces/words.interface';

@Injectable({
  providedIn: 'root'
})
export class TermService {

  constructor(private http: HttpClient) { }

  findTerm(term: string){
    if(term==''){
      return [];
    }
    term = term.toLowerCase();
    return data.filter(word => word.keyword.toLowerCase().includes(term));
  }

  // getArticleById(id: string): Observable<any>{
  //   const url = `http://caribe.udea.edu.co/pmc_murcia/${id}.xml.json`;
  //   return new Observable(obs => {
  //     this.http.get(url).subscribe((res)=>{
  //       if(res){
  //         obs.next(res);
  //       }else{
  //         obs.error();
  //       }
  //     }, ()=>{
  //       obs.error();
  //     });
  //   })
  // }
  async getArticleById(id: string){
    const url = `http://caribe.udea.edu.co/pmc_murcia/${id}.xml.json`;
    const peticion = await this.http.get(url).toPromise();
    return new Promise((resolve, reject) =>{
      if(peticion){
        resolve(peticion);
      }else{
        reject('Error');
      }
    })
  }
}
