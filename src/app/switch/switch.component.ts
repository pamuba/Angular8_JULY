import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  constructor() { }

  public color = "red";

  public colors = ["red", "blue", "green"]
  ngOnInit(): void {
  }

}
