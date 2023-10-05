import { Component } from '@angular/core';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [
    {name: 'Img1.svg', caption: 'img1'},
    {name: 'Img2.svg', caption: 'img2'},
    {name: 'Img3.svg', caption: 'img3'},
    {name: 'Img3.svg', caption: 'img3'},


  ]

}
