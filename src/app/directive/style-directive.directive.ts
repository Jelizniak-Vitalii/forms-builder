import { HostListener } from '@angular/core';
import { Directive , ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyleDirective]'
})
export class StyleDirectiveDirective {

  constructor(private element: ElementRef, private r: Renderer2) { 
    // this.r.setStyle(this.element.nativeElement, 'fontSize', '12px')
    // this.element.nativeElement.style.backgroundC olor = '';
    // this.element.nativeElement.style.backgroundColor = 'red';
    console.log(this.r)
  }

  @HostListener('click', ['$event.target']) onclick(event: any): void {
    this.r.setStyle(this.element.nativeElement, 'backgroundColor', 'blue')
  }

}
