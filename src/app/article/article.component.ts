import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Service } from '../service/service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  service: Service
  constructor(private _router: Router) { 
    this.service = new Service();
  }

  ngOnInit(): void {
  }

  onClick(articleId: Number) {
    this._router.navigate(['/singlearticle', articleId]);
  }

}
