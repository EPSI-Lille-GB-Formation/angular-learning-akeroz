import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) { }

/*document.querySelector("[appHighlight]").addEventListener("mouseenter", () -> {

  })*/

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.elementRef.nativeElement.style.backgroundColor = "white";
  }

}


