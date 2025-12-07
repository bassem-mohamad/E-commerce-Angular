import { Directive,Input,ElementRef,OnChanges,HostListener } from '@angular/core';

@Directive({
  selector: '[appCardStyle]',
})
export class CardStyle implements OnChanges {
 @Input() color1: string = 'blue';
  constructor(public elem: ElementRef) { }

  ngOnChanges(): void {
    //1
    console.log('ngOnChanges');

    this.elem.nativeElement.style.border = `2px solid ${this.color1}`;
  }

@HostListener('mouseover') mouseOver() {
    this.elem.nativeElement.style.border = `2px solid red`;
  }
  @HostListener('mouseout') mouseOut() {
    this.elem.nativeElement.style.border = `2px solid ${this.color1}`;
  }

}
