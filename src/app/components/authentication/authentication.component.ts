import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  public screen: number;

  constructor() {
    this.screen = 1;
  }

  ngOnInit(): void {}

  changeScreen() {
    this.screen = this.screen === 1 ? 2 : 1;
  }
}
