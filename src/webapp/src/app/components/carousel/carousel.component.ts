import { Component, HostListener, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd';

@Component({
  selector: 'nz-slide-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class NzDemoCarouselBasicComponent {
  @ViewChild(NzCarouselComponent) nzCarouselComponent: NzCarouselComponent;

  array = [ 1, 2, 3, 4 ];
  effect = 'scrollx';

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.nzCarouselComponent.next();
  }

  ngOnInit() {
    setTimeout(() => {
      this.effect = 'fade';
    }, 3000);
  }
}
