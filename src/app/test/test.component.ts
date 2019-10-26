import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
   private nom : string ;
   private prenom : string;  
  constructor() { }

  ngOnInit() {
    this.nom = 'boubechtoula';
    this.prenom= 'walid';
  }
 public getNom(): string {
   return this.nom;
 }
 public getPrenom(): string {
   return this.prenom;
 }
}