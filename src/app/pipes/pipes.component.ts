import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "Angular8";
  public message = "hello how are you";
  public date = new Date();
  public person = {
    "firstName":"John",
    "lastsName":"Smith"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
