import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  service:Service;
  selectedElement:Number;
  constructor() { 
    this.service = new Service();
  }

  ngOnInit(): void {
    this.selectedElement =0;
  }

}
