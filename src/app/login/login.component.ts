import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Service } from '../service/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  service:Service;
  selectedElement:Number;
  constructor(private formBuilder: FormBuilder) { 
    this.service = new Service();
  }

  public ngOnInit(): void {
    this.selectedElement =0;
  }

}
