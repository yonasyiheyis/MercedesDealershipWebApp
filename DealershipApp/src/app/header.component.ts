import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  template: `
      <p> welcome to my page </p>
   <img src="https://www.mbusa.com/etc/designs/mb-nafta/images/Mercedes_Benz__logo--desktop.png" alt=""/>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
