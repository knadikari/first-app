import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  service:Service;
  constructor() {
    this.service = new Service();
   }

  ngOnInit(): void {
  }

}
