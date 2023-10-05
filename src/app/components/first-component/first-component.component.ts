import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
   name: string = 'Douglas';
   age: number =  30;
   job: string = 'programador';
   hobbie = ['correr', 'nadar', 'andar'];
   car = {
      name: 'Polo',
      year: '2020',
   };


  constructor() {}


  ngOnInit(): void {

  }
}
