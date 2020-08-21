import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Service } from '../service/service';
import { News } from '../service/news';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-singlearticle',
  templateUrl: './singlearticle.component.html',
  styleUrls: ['./singlearticle.component.css']
})
export class SinglearticleComponent implements OnInit {

  service: Service;
  article: News;
  form: FormGroup;
  title: String;
  image: String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service = new Service();
    this.route.paramMap.subscribe(params => {
      const articleId = +params.get('id');
      console.log(articleId);
      
      if (articleId) {
        this.article = this.service.getSingleNews(articleId);
        // this.title = this.article.title;
        // this.image = this.article.image;
      }
    })
  }
  
   isEmpty(data: String) {
     if (data === ""){
       return true;
     }
     return false;
   }

  // populateArticle(article: News) {
  //   this.form.patchValue({
  //     title: article.title
  //   });
  // }
}
