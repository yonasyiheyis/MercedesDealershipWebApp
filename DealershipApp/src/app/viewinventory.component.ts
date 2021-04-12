import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'viewinventory',
  template: `
    <div class="but">
      <a
        class="viewanc"
        mat-raised-button
        color="primary"
        [routerLink]="['/login']"
        >view inventory</a
      >
    </div>
  `,
  styles: [
    'div.but {background-image:url("../assets/merchedis.png");height:600px; width:100%;}',
    'a.viewanc {display:block;width:300px;margin-left:500px;vertical-align:center;}',
  ],
})
export class ViewinventoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
