import { Component, OnInit } from '@angular/core';
import { SuperHeros } from '../super-heros'

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  superHeros:SuperHeros[]

  constructor() { }

  ngOnInit(): void {

    this.superHeros = [
      {Id:1, Name:"IRON MAN"},
      {Id:2, Name:"THOR"},
      {Id:3, Name:"CAPTAIN AMERICA"},
      {Id:4, Name:"HULK"},
    ]
    
  }

  

}
