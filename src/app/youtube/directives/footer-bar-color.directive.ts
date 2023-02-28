import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFooterBarColor]'
})
export class FooterBarColorDirective implements OnInit {
  @Input() barColor: string = '';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  public ngOnInit(): void {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', this.barColor);
  }

}


