import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../service/service';
import { Router } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  service:Service;
  @Input()
  page: number;
  pageSize: number;
  collectionSize: number;
  constructor(private _router: Router) {
    this.service = new Service();
    this.page = 0;
    this.pageSize = 3;
    this.collectionSize = 5;
   }

  ngOnInit(): void {
  }
  onClick(articleId: Number) {
    this._router.navigate(['/singlearticle', articleId]);
  }
  
  increasePageNumber() {
    if (!(this.page+this.pageSize >= this.collectionSize)) {
      this.page = this.page +1;
      console.log(this.page);
    }
  }

  disablePrevious(): boolean {
    return (this.page <= 0);
  }
  
  disableNext(): boolean {
    return (this.page+this.pageSize >= this.collectionSize);
  }

  decreasePageNumber() {
    if (this.page > 0) {
      this.page = this.page -1;
    }
    console.log(this.page);
  }
}
