import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer>
  <mat-toolbar>
  <span>Get In Touch</span>
  <mat-toolbar-row>
  <span><mat-icon aria-hidden="false" aria-label="Example home icon">home </mat-icon></span>
  <span class="example-spacer">
  Address
  </span>

  <span class="example-spacer">
  working Hours
  </span> 
  <span class="example-spacer">
  map
  <div #mapContainer id="map"></div>
  </span> 

  
  
  

</mat-toolbar-row>
</mat-toolbar>
</footer>
  
  `,
  styles: [
    '.example-spacer { flex: 1 1 auto, #map {  height: 500px  width: 100%;   }}'

  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
