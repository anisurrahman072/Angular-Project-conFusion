import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
/* Renderer2 allow the automatic change of HTML pageas as per as current changes || 
HostListener will listen the mouse movements */

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

    @HostListener('mouseenter') onMouseEnter(){ /* When 'mouseenter' event occures then call onMouseEnter() method */
      this.renderer.addClass(this.el.nativeElement, 'highlight');
    }

    @HostListener('mouseleave') onMouseLeave(){ /* When 'mouseenter' event occures then call onMouseEnter() method */
      this.renderer.removeClass(this.el.nativeElement, 'highlight');
    }

}
