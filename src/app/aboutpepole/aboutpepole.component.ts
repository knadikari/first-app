import { Component, OnInit } from '@angular/core';
import { BoardMember } from './boardmember';

@Component({
  selector: 'app-aboutpepole',
  templateUrl: './aboutpepole.component.html',
  styleUrls: ['./aboutpepole.component.css']
})
export class AboutpepoleComponent implements OnInit {

  advisoryboard :BoardMember[];
  directorboard :BoardMember[];
  constructor() { 
    this.setAdvisoryBoard();
    this.setDirectorBoard();
  }

  ngOnInit(): void {
  }

  setAdvisoryBoard() {
    this.advisoryboard= [
        {name:"Dr. Upali Mampitiya", title:"Senior Lecturer", details:"Department of Mathematics, Open University", email:"@example.com", image:""},
        {name:"Dr. Romaine Jayawardene", title:"Senior Lecturer", details:"Department of Mathematics, University of Colombo", email:"@example.com", image:""},
        {name:"Dr. Chanakya Wijeratne", title:"Senior Lecturer", details:"Department of Mathematics, University of Colombo", email:"@example.com", image:""}
      ];
  }

  setDirectorBoard() {
    this.directorboard= [
        {name:"Dr. Chanakya Wijeratne", title:"Senior Lecturer (Chief Executive Officer)", details:"Department of Mathematics, University of Colombo", email:"@example.com", image:""},
        {name:"Dr. Dayal Dharmasena", title:"Senior Lecturer (Director of Training)", details:"Department of Mathematics, Open University", email:"@example.com", image:""},
        {name:"Mr. Kapila Silva", title:"Lecturer", details:"Department of Mathematics, University of Sri Jayawardenepura", email:"@example.com", image:""},
        {name:"Dr. Kaushika De Silva", title:"Senior Lecturer", details:"Department of Mathematics, University of Sri Jayawardenepura", email:"@example.com", image:""},
        {name:"Dr. Nuwan de Silva", title:"Machine Learning Consultant", details:"International Mathematical Olympiad 2002 participant", email:"@example.com", image:""},
        {name:"Mr. Priyantha Jayawickrama", title:"Wg Cdr (rtd) (Director of Operations)", details:"Sri Lanka Air Force", email:"@example.com", image:""},
        {name:"Dr. Dileepa Fernando", title:"Senior Lecturer", details:"Sri Lanka Technological Campus and International Mathematical Olympiad 2008 and 2009 participant", email:"@example.com", image:""},
      ];
  }
}
