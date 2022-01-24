import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-styling',
  templateUrl: './jobs-styling.component.html',
  styleUrls: ['./jobs-styling.component.scss']
})
export class JobsStylingComponent {
  primaryColor!: string;
  secondaryColor!: string;

  constructor() {
    this.changeTheme('red', 'yellow'); // Set default theme
  }

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }

}
