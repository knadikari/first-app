import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../service/news';

@Component({
  selector: 'app-articlecard',
  templateUrl: './articlecard.component.html',
  styleUrls: ['./articlecard.component.css']
})
export class ArticlecardComponent implements OnInit {

  @Input() article: News;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onClick(articleId: Number) {
    this._router.navigate(['/singlearticle', articleId]);
  }

}
